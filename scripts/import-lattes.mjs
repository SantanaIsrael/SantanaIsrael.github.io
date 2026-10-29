import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const ROOT_DIR = process.cwd();
const DEFAULT_XML_PATH = path.join(ROOT_DIR, 'lattes', 'curriculo.xml');
const SAMPLE_XML_PATH = path.join(ROOT_DIR, 'lattes', 'exemplo-curriculo.xml');
const OUTPUT_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'lattes.json');

const cliPath = process.argv[2] ? path.resolve(ROOT_DIR, process.argv[2]) : null;
const sourcePath =
  cliPath && fs.existsSync(cliPath)
    ? cliPath
    : fs.existsSync(DEFAULT_XML_PATH)
      ? DEFAULT_XML_PATH
      : SAMPLE_XML_PATH;

if (!fs.existsSync(sourcePath)) {
  console.error(
    '❌ Nenhum arquivo XML encontrado. Coloque seu arquivo exportado do CNPq em "lattes/curriculo.xml".'
  );
  process.exit(1);
}

const rawBuffer = fs.readFileSync(sourcePath);
const headPreview = rawBuffer.subarray(0, 200).toString('ascii');
const isIso88591 = /encoding=["']ISO-8859-1["']/i.test(headPreview);
const xmlString = new TextDecoder(isIso88591 ? 'iso-8859-1' : 'utf-8').decode(rawBuffer);

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

const parsed = parser.parse(xmlString);
const cv = parsed['CURRICULO-VITAE'];

if (!cv) {
  console.error('❌ Estrutura inválida: tag raiz <CURRICULO-VITAE> não encontrada no XML.');
  process.exit(1);
}

function asArray(val) {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

const dadosGerais = cv['DADOS-GERAIS'] || {};
const resumoNode = dadosGerais['RESUMO-CV'] || {};
const formacaoNode = dadosGerais['FORMACAO-ACADEMICA-TITULACAO'] || {};

// 1. Formação Acadêmica
const degreeTypes = [
  { tag: 'DOUTORADO', labelPt: 'Doutorado', labelEn: 'Ph.D.' },
  { tag: 'MESTRADO', labelPt: 'Mestrado', labelEn: "Master's Degree" },
  { tag: 'ESPECIALIZACAO', labelPt: 'Especialização', labelEn: 'Specialization' },
  { tag: 'GRADUACAO', labelPt: 'Graduação', labelEn: 'B.Sc. Undergraduate' },
  {
    tag: 'CURSO-TECNICO-PROFISSIONALIZANTE',
    labelPt: 'Ensino Técnico',
    labelEn: 'Technical Degree',
  },
];

const education = [];
for (const deg of degreeTypes) {
  for (const item of asArray(formacaoNode[deg.tag])) {
    const startYear = item['@_ANO-DE-INICIO'] || '';
    const endYear =
      item['@_STATUS-DO-CURSO'] === 'EM_ANDAMENTO' || !item['@_ANO-DE-CONCLUSAO']
        ? 'Atual'
        : item['@_ANO-DE-CONCLUSAO'];
    const courseName = item['@_NOME-CURSO'] || deg.labelPt;
    const institution = item['@_NOME-INSTITUICAO'] || '';
    const thesisTitle =
      item['@_TITULO-DO-TRABALHO-DE-CONCLUSAO-DE-CURSO'] ||
      item['@_TITULO-DA-DISSERTACAO-TESE'] ||
      '';

    education.push({
      id: `edu-${deg.tag.toLowerCase()}-${startYear || education.length}`,
      levelPt: deg.labelPt,
      levelEn: deg.labelEn,
      coursePt: `${deg.labelPt} em ${courseName}`,
      courseEn: `${deg.labelEn} in ${courseName}`,
      institution,
      periodPt: startYear ? `${startYear} — ${endYear}` : endYear,
      periodEn: startYear
        ? `${startYear} — ${endYear === 'Atual' ? 'Present' : endYear}`
        : endYear,
      status: item['@_STATUS-DO-CURSO'] || 'EM_ANDAMENTO',
      thesisTitle,
    });
  }
}

// 2. Projetos de Pesquisa / Extensão / Desenvolvimento nas Atuações Profissionais
const researchProjects = [];
const atuacoes = asArray(dadosGerais['ATUACOES-PROFISSIONAIS']?.['ATUACAO-PROFISSIONAL']);

for (const atuacao of atuacoes) {
  const instName = atuacao['@_NOME-INSTITUICAO'] || '';
  const participacoes = asArray(
    atuacao['ATIVIDADES-DE-PARTICIPACAO-EM-PROJETO']?.['PARTICIPACAO-EM-PROJETO']
  );

  for (const part of participacoes) {
    for (const proj of asArray(part['PROJETO-DE-PESQUISA'])) {
      const start = proj['@_ANO-INICIO'] || '';
      const end = proj['@_ANO-FIM'] || 'Atual';
      const nature = proj['@_NATUREZA'] || 'PESQUISA';
      researchProjects.push({
        id: `proj-${researchProjects.length + 1}`,
        titlePt: proj['@_NOME-DO-PROJETO'] || 'Projeto Acadêmico',
        titleEn: proj['@_NOME-DO-PROJETO-INGLES'] || proj['@_NOME-DO-PROJETO'] || 'Academic Project',
        institution: instName,
        nature,
        periodPt: start ? `${start} — ${end}` : end,
        periodEn: start ? `${start} — ${end === 'Atual' ? 'Present' : end}` : end,
        situation: proj['@_SITUACAO'] || 'EM_ANDAMENTO',
        descriptionPt: proj['@_DESCRICAO-DO-PROJETO'] || '',
        descriptionEn:
          proj['@_DESCRICAO-DO-PROJETO-INGLES'] || proj['@_DESCRICAO-DO-PROJETO'] || '',
      });
    }
  }
}

// 3. Produção Bibliográfica (Artigos & Trabalhos em Eventos)
const publications = [];
const prodBib = cv['PRODUCAO-BIBLIOGRAFICA'] || {};

for (const art of asArray(prodBib['ARTIGOS-PUBLICADOS']?.['ARTIGO-PUBLICADO'])) {
  const basic = art['DADOS-BASICOS-DO-ARTIGO'] || {};
  const detail = art['DETALHAMENTO-DO-ARTIGO'] || {};
  const authors = asArray(art['AUTORES']).map(
    (a) => a['@_NOME-PARA-CITACAO'] || a['@_NOME-COMPLETO-DO-AUTOR']
  );
  publications.push({
    id: `art-${publications.length + 1}`,
    typePt: 'Artigo em Periódico',
    typeEn: 'Journal Article',
    titlePt: basic['@_TITULO-DO-ARTIGO'] || '',
    titleEn: basic['@_TITULO-DO-ARTIGO-INGLES'] || basic['@_TITULO-DO-ARTIGO'] || '',
    year: basic['@_ANO-DO-ARTIGO'] || '',
    venue: detail['@_TITULO-DO-PERIODICO-OU-REVISTA'] || '',
    doi: basic['@_DOI'] || '',
    authors,
  });
}

for (const trab of asArray(prodBib['TRABALHOS-EM-EVENTOS']?.['TRABALHO-EM-EVENTOS'])) {
  const basic = trab['DADOS-BASICOS-DO-TRABALHO'] || {};
  const detail = trab['DETALHAMENTO-DO-TRABALHO'] || {};
  const authors = asArray(trab['AUTORES']).map(
    (a) => a['@_NOME-PARA-CITACAO'] || a['@_NOME-COMPLETO-DO-AUTOR']
  );
  publications.push({
    id: `conf-${publications.length + 1}`,
    typePt: 'Trabalho em Evento',
    typeEn: 'Conference Paper',
    titlePt: basic['@_TITULO-DO-TRABALHO'] || '',
    titleEn: basic['@_TITULO-DO-TRABALHO-INGLES'] || basic['@_TITULO-DO-TRABALHO'] || '',
    year: basic['@_ANO-DO-TRABALHO'] || '',
    venue: detail['@_NOME-DO-EVENTO'] || detail['@_TITULO-DOS-ANAIS-OU-PROCEEDINGS'] || '',
    doi: basic['@_DOI'] || '',
    authors,
  });
}

// 4. Produção Técnica (Softwares registrados / desenvolvidos)
const softwares = [];
const prodTec = cv['PRODUCAO-TECNICA'] || {};
for (const sw of asArray(prodTec['SOFTWARE'])) {
  const basic = sw['DADOS-BASICOS-DO-SOFTWARE'] || {};
  const detail = sw['DETALHAMENTO-DO-SOFTWARE'] || {};
  softwares.push({
    id: `sw-${softwares.length + 1}`,
    titlePt: basic['@_TITULO-DO-SOFTWARE'] || '',
    titleEn: basic['@_TITULO-DO-SOFTWARE-INGLES'] || basic['@_TITULO-DO-SOFTWARE'] || '',
    year: basic['@_ANO'] || '',
    purposePt: detail['@_FINALIDADE'] || '',
    purposeEn: detail['@_FINALIDADE-INGLES'] || detail['@_FINALIDADE'] || '',
    platform: detail['@_PLATAFORMA'] || '',
    institution: detail['@_INSTITUICAO-FINANCIADORA'] || '',
  });
}

// 5. Idiomas
const languages = asArray(dadosGerais['IDIOMAS']?.['IDIOMA']).map((lang) => ({
  language: lang['@_DESCRICAO-DO-IDIOMA'] || '',
  reading: lang['@_PROFICIENCIA-DE-LEITURA'] || '',
  speaking: lang['@_PROFICIENCIA-DE-FALA'] || '',
  writing: lang['@_PROFICIENCIA-DE-ESCRITA'] || '',
}));

const output = {
  lattesId: cv['@_NUMERO-IDENTIFICADOR'] || '5875369343046849',
  lattesUrl: `http://lattes.cnpq.br/${cv['@_NUMERO-IDENTIFICADOR'] || '5875369343046849'}`,
  lastUpdated: cv['@_DATA-ATUALIZACAO'] || '',
  fullName: dadosGerais['@_NOME-COMPLETO'] || 'Israel Santana',
  citationName: dadosGerais['@_NOME-EM-CITACOES-BIBLIOGRAFICAS'] || 'SANTANA, I.',
  summaryPt: resumoNode['@_TEXTO-RESUMO-CV-RH'] || '',
  summaryEn: resumoNode['@_TEXTO-RESUMO-CV-RH-EN'] || resumoNode['@_TEXTO-RESUMO-CV-RH'] || '',
  education,
  researchProjects,
  publications,
  softwares,
  languages,
};

fs.mkdirSync(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(output, null, 2) + '\n', 'utf-8');

console.log(`✅ Currículo Lattes importado com sucesso a partir de: ${path.relative(ROOT_DIR, sourcePath)}`);
console.log(`📄 Arquivo gerado: ${path.relative(ROOT_DIR, OUTPUT_JSON_PATH)}`);
console.log(
  `   • Formação: ${education.length} | Projetos: ${researchProjects.length} | Publicações: ${publications.length} | Softwares: ${softwares.length}`
);
