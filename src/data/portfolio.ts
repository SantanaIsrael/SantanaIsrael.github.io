import type {
  FeaturedProject,
  GitHubRepo,
  InstitutionalPartner,
  RepoEnrichment,
  SkillGroup,
  TrajectoryItem,
} from '../types/portfolio';

export const PROFILE = {
  name: 'Israel Santana',
  fullName: 'Israel Santana dos Anjos',
  githubUsername: 'SantanaIsrael',
  avatarUrl: 'https://avatars.githubusercontent.com/u/113399087?v=4',
  location: {
    pt: 'Ilhéus, Bahia · Brasil',
    en: 'Ilhéus, Bahia · Brazil',
  },
  institutionShort: 'UESC',
  institutionFull: {
    pt: 'Universidade Estadual de Santa Cruz',
    en: 'Santa Cruz State University (UESC)',
  },
  email: 'isanjos.cic@uesc.br',
  links: {
    github: 'https://github.com/SantanaIsrael',
    linkedin: 'https://www.linkedin.com/in/israel-santana-29189b1b9/',
    lattes: 'http://lattes.cnpq.br/5875369343046849',
    whatsapp: 'https://wa.me/@SantanaIsrael.py',
    cvPdf: './cv-israel-santana.pdf',
  },
  roleHeadline: {
    pt: 'Ciência da Computação, Sistemas Web & Dados Geográficos.',
    en: 'Computer Science, Web Systems & Spatial Data.',
  },
  heroLead: {
    pt: 'Graduando em Ciência da Computação na UESC. Desenvolvo aplicações full stack, soluções em WebGIS e sistemas institucionais conectando pesquisa acadêmica, engenharia de software e inovação tecnológica.',
    en: 'Computer Science undergraduate at UESC. Building full-stack web platforms, WebGIS applications, and institutional systems bridging academic research, software engineering, and technological innovation.',
  },
};

export const UI_COPY = {
  nav: {
    overview: { pt: 'Visão Geral', en: 'Overview' },
    projects: { pt: 'Projetos', en: 'Projects' },
    trajectory: { pt: 'Trajetória', en: 'Trajectory' },
    partners: { pt: 'Parcerias', en: 'Partners' },
    skills: { pt: 'Habilidades', en: 'Skills' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    availabilityBadge: {
      pt: 'Pesquisa, Desenvolvimento & Parcerias · UESC',
      en: 'R&D, Software Engineering & Partnerships · UESC',
    },
    exploreProjects: { pt: 'Explorar Projetos', en: 'Explore Projects' },
    viewLattes: { pt: 'Currículo Lattes', en: 'Lattes CV' },
    bento: {
      buildingNowLabel: { pt: 'Em Desenvolvimento', en: 'Currently Building' },
      buildingNowTitle: { pt: 'SAPPI & WEBGIS_PMRRIOS', en: 'SAPPI & WEBGIS_PMRRIOS' },
      buildingNowDesc: {
        pt: 'Sistemas institucionais em produção evolutiva para gestão de propriedade intelectual e inteligência geográfica.',
        en: 'Evolving institutional platforms for intellectual property management and spatial intelligence.',
      },
      academicBaseLabel: { pt: 'Base Acadêmica', en: 'Academic Base' },
      academicBaseTitle: { pt: 'Ciência da Computação', en: 'Computer Science' },
      academicBaseDesc: {
        pt: 'Universidade Estadual de Santa Cruz (UESC) · Ilhéus, BA.',
        en: 'Santa Cruz State University (UESC) · Ilhéus, BA.',
      },
      focusAreasLabel: { pt: 'Domínios Técnicos', en: 'Core Domains' },
      focusAreasItems: {
        pt: ['Full Stack Web', 'WebGIS & Dados Espaciais', 'Conteinerização (Docker)', 'Sistemas Distribuídos'],
        en: ['Full Stack Web', 'WebGIS & Spatial Data', 'Containerization (Docker)', 'Distributed Systems'],
      },
      ecosystemLabel: { pt: 'Fontes Integradas', en: 'Integrated Sources' },
      ecosystemDesc: {
        pt: 'Repositórios GitHub, produção científica Lattes e competências profissionais reunidos em um só lugar.',
        en: 'GitHub repositories, Lattes academic records, and technical competencies unified in one place.',
      },
    },
  },
  projects: {
    eyebrow: { pt: 'Engenharia & Pesquisa Aplicada', en: 'Engineering & Applied Research' },
    title: { pt: 'Projetos em destaque e em construção.', en: 'Featured work and active builds.' },
    subtitle: {
      pt: 'Uma curadoria dos sistemas institucionais e pesquisas que desenvolvo atualmente, seguida pelo catálogo público sincronizado com o GitHub.',
      en: 'A curated showcase of ongoing institutional systems and research, followed by my live public GitHub repository catalog.',
    },
    statusLabels: {
      in_development: { pt: 'Em desenvolvimento', en: 'In development' },
      research: { pt: 'Pesquisa & Extensão', en: 'Research & Extension' },
      completed: { pt: 'Concluído', en: 'Completed' },
    },
    visibilityLabels: {
      private: { pt: 'Repositório Privado', en: 'Private Repository' },
      partner: { pt: 'Organização Parceira', en: 'Partner Organization' },
      public: { pt: 'Código Aberto', en: 'Open Source' },
    },
    inspectDetails: { pt: 'Ver arquitetura e detalhes', en: 'View architecture & details' },
    githubSectionTitle: { pt: 'Repositórios Públicos no GitHub', en: 'Public GitHub Repositories' },
    githubSectionSub: {
      pt: 'Sincronizado automaticamente com @SantanaIsrael',
      en: 'Automatically synced with @SantanaIsrael',
    },
    allLanguages: { pt: 'Todos', en: 'All' },
    openRepo: { pt: 'Abrir no GitHub', en: 'Open on GitHub' },
    updatedLabel: { pt: 'Atualizado em', en: 'Updated' },
  },
  trajectory: {
    eyebrow: { pt: 'Lattes · LinkedIn · UESC', en: 'Lattes · LinkedIn · UESC' },
    title: { pt: 'Trajetória acadêmica e técnica.', en: 'Academic and technical trajectory.' },
    subtitle: {
      pt: 'Formação universitária, projetos de pesquisa e desenvolvimento tecnológico organizados de forma cronológica e didática.',
      en: 'University education, research initiatives, and software development milestones organized clearly.',
    },
    filters: {
      all: { pt: 'Visão Unificada', en: 'Unified View' },
      academic: { pt: 'Acadêmico & Pesquisa (Lattes)', en: 'Academic & Research (Lattes)' },
      professional: { pt: 'Atuação & Engenharia (LinkedIn)', en: 'Engineering & Practice (LinkedIn)' },
    },
    lattesBannerTitle: { pt: 'Currículo Lattes Oficial (CNPq)', en: 'Official CNPq Lattes CV' },
    lattesBannerDesc: {
      pt: 'ID Lattes 5875369343046849 · Estruturado via exportação XML e verificável na plataforma do CNPq.',
      en: 'Lattes ID 5875369343046849 · Structured via XML export and verifiable on the CNPq platform.',
    },
    openOfficialLattes: { pt: 'Acessar no CNPq', en: 'Open on CNPq' },
    readMore: { pt: 'Expandir detalhes', en: 'Expand details' },
  },
  partners: {
    eyebrow: { pt: 'Ecossistema Institucional', en: 'Institutional Ecosystem' },
    title: { pt: 'Instituições, núcleos e laboratórios parceiros.', en: 'Partner institutions, centers, and labs.' },
    subtitle: {
      pt: 'Ambientes acadêmicos e núcleos de inovação onde os projetos saem do papel e geram impacto real.',
      en: 'Academic environments and innovation centers where research and software translate into real-world impact.',
    },
    relatedLabel: { pt: 'Iniciativas vinculadas', en: 'Linked initiatives' },
    visitSite: { pt: 'Conhecer instituição', en: 'Visit website' },
  },
  skills: {
    eyebrow: { pt: 'Repertório Tecnológico', en: 'Technical Stack' },
    title: { pt: 'Habilidades organizadas por contexto.', en: 'Skills organized by domain.' },
    subtitle: {
      pt: 'Ferramentas aplicadas na prática ao longo da graduação, pesquisas científicas e desenvolvimento de sistemas.',
      en: 'Technologies applied across undergraduate coursework, scientific computing, and full-stack software delivery.',
    },
  },
  contact: {
    eyebrow: { pt: 'Contato & Conexões', en: 'Contact & Links' },
    title: { pt: 'Vamos conversar sobre projetos, pesquisa ou oportunidades.', en: "Let's connect on projects, research, or opportunities." },
    subtitle: {
      pt: 'Aberto a colaborações acadêmicas, projetos de desenvolvimento de software, estágios e iniciativas de inovação.',
      en: 'Open to academic collaborations, software engineering opportunities, internships, and innovation initiatives.',
    },
    copyEmail: { pt: 'Copiar e-mail institucional', en: 'Copy institutional email' },
    emailCopied: { pt: 'E-mail copiado!', en: 'Email copied!' },
    downloadCv: { pt: 'Baixar Currículo (PDF)', en: 'Download Resume (PDF)' },
  },
  modal: {
    architectureTitle: { pt: 'Contexto Técnico & Arquitetura', en: 'Technical Context & Architecture' },
    highlightsTitle: { pt: 'Principais Entregas e Aprendizados', en: 'Key Deliverables & Insights' },
    close: { pt: 'Fechar', en: 'Close' },
  },
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'sappi',
    title: 'SAPPI',
    subtitle: {
      pt: 'Sistema de Acompanhamento e Gestão de Propriedade Intelectual',
      en: 'Intellectual Property Tracking & Management Platform',
    },
    description: {
      pt: 'Plataforma web em desenvolvimento voltada para modernizar fluxos de submissão, organização documental e acompanhamento de ativos de propriedade intelectual junto ao Núcleo de Inovação Tecnológica (NIT-UESC).',
      en: 'Web platform currently in active development to streamline submission workflows, document management, and tracking of intellectual property filings with NIT-UESC.',
    },
    architectureDetails: {
      pt: 'Arquitetura full stack conteinerizada com Docker, combinando backend em Python para regras de negócio e tramitação institucional, banco de dados relacional PostgreSQL para integridade de registros e interface web responsiva em JavaScript, HTML5 e CSS3.',
      en: 'Containerized full-stack architecture powered by Docker, combining a Python backend for institutional workflow rules, PostgreSQL relational storage for record integrity, and a responsive JavaScript/HTML/CSS web interface.',
    },
    highlights: {
      pt: [
        'Desenvolvido em parceria institucional com o Núcleo de Inovação Tecnológica (NIT-UESC).',
        'Modelagem relacional em PostgreSQL estruturada para rastreabilidade de processos e registros.',
        'Ambiente padronizado em containers Docker facilitando implantação reproduzível e manutenção.',
      ],
      en: [
        'Developed in institutional partnership with the Technological Innovation Center (NIT-UESC).',
        'PostgreSQL relational schema designed for end-to-end auditability of IP workflows.',
        'Standardized Docker container orchestration ensuring reproducible development and deployment.',
      ],
    },
    status: 'in_development',
    visibility: 'private',
    partnerTag: {
      pt: 'Parceria NIT-UESC',
      en: 'NIT-UESC Partnership',
    },
    techStack: ['Python', 'JavaScript', 'PostgreSQL', 'Docker', 'HTML5', 'CSS3'],
    // Adicione abaixo o link do sistema no ar (demoUrl) e/ou repositório (repoUrl):
    demoUrl: 'https://sappi.uesc.br',
    // repoUrl: 'https://github.com/SantanaIsrael/SAPPI',
    featuredSpan: 'large',
    accentGradient: 'from-sky-500/20 via-blue-500/10 to-indigo-500/20',
    year: '2025 — Atual',
  },
  {
    id: 'webgis-pmrrios',
    title: 'WEBGIS_PMRRIOS',
    subtitle: {
      pt: 'Sistema de Informações Geográficas na Web para Recursos Hídricos',
      en: 'Web Geographic Information System for Spatial & Hydrographic Data',
    },
    description: {
      pt: 'Aplicação WebGIS voltada para visualização interativa, organização de camadas cartográficas e consulta de informações geográficas aplicadas a bacias hidrográficas e gestão territorial.',
      en: 'WebGIS application crafted for interactive map visualization, spatial layer management, and geographic querying applied to river basins and environmental monitoring.',
    },
    architectureDetails: {
      pt: 'Integra processamento de dados geoespaciais em Python com renderização interativa de mapas no navegador via JavaScript, empacotado em containers Docker para garantir portabilidade das bibliotecas geográficas.',
      en: 'Integrates geospatial data processing in Python with interactive browser map rendering in JavaScript, packaged via Docker containers to isolate complex GIS dependencies.',
    },
    highlights: {
      pt: [
        'Visualização didática de dados espaciais e indicadores ambientais diretamente no navegador.',
        'Colaboração multidisciplinar unindo Ciência da Computação e análise geográfica/ambiental.',
        'Infraestrutura conteinerizada pronta para escalar novas camadas e bases georreferenciadas.',
      ],
      en: [
        'Accessible browser-based exploration of spatial layers and environmental indicators.',
        'Cross-disciplinary collaboration uniting Computer Science and geographic analysis.',
        'Containerized GIS runtime ready to incorporate new georeferenced datasets.',
      ],
    },
    status: 'in_development',
    visibility: 'partner',
    partnerTag: {
      pt: 'Pesquisa Aplicada · WebGIS',
      en: 'Applied Research · WebGIS',
    },
    techStack: ['Python', 'JavaScript', 'WebGIS', 'Docker', 'HTML5', 'CSS3'],
    // Adicione abaixo o link da plataforma WebGIS (demoUrl) e/ou repositório (repoUrl):
    demoUrl: 'https://pmrr.uesc.br',
    // repoUrl: 'https://github.com/Brendacas/WEBGIS_PMRRIOS',
    featuredSpan: 'large',
    accentGradient: 'from-cyan-500/20 via-teal-500/10 to-blue-600/20',
    year: '2025 — Atual',
  },
  {
    id: 'the-bots',
    title: 'The-Bots',
    subtitle: {
      pt: 'Robótica Experimental, Controle & Sistemas Embarcados',
      en: 'Experimental Robotics, Control & Embedded Systems',
    },
    description: {
      pt: 'Repositório central de algoritmos de controle, leitura de sensores e programação de microcontroladores desenvolvidos para projetos universitários de robótica.',
      en: 'Core repository of control algorithms, sensor acquisition routines, and microcontroller firmware built for university robotics projects.',
    },
    architectureDetails: {
      pt: 'Código escrito em C++ e plataforma Arduino focado em baixa latência, controle determinístico de atuadores, calibração de sensores e modularidade para testes em bancada e pista.',
      en: 'Written in C++ for Arduino/embedded targets with emphasis on low-latency sensor loops, deterministic actuator control, and modular calibration routines.',
    },
    highlights: {
      pt: [
        'Integração direta entre software em C++ e hardware embarcado (sensores e motores).',
        'Trabalho colaborativo em equipe de robótica universitária com versionamento estruturado.',
        'Base sólida em lógica de tempo real, depuração em hardware e otimização de memória.',
      ],
      en: [
        'Tight integration between C++ firmware and embedded hardware sensors/actuators.',
        'Collaborative engineering within an academic robotics team.',
        'Hands-on foundation in real-time control loops and memory-constrained code.',
      ],
    },
    status: 'research',
    visibility: 'public',
    partnerTag: {
      pt: 'Robótica · UESC',
      en: 'Robotics · UESC',
    },
    techStack: ['C++', 'Arduino', 'Sistemas Embarcados', 'Controle'],
    repoUrl: 'https://github.com/SantanaIsrael/The-Bots',
    featuredSpan: 'medium',
    accentGradient: 'from-indigo-500/20 via-slate-500/10 to-sky-500/20',
    year: '2023 — 2024',
  },
  {
    id: 'distributed-mpi-go',
    title: 'Sistemas Distribuídos & MPI',
    subtitle: {
      pt: ' Jogo Go em Rede & Eleição de Líder com Algoritmo do Valentão',
      en: 'Networked Go Game & Bully Leader Election in MPI',
    },
    description: {
      pt: 'Conjunto de projetos explorando concorrência, troca de mensagens em cluster (MPI em C) e sincronização de estado distribuído em rede (Java).',
      en: 'Suite of systems projects exploring cluster message passing (MPI in C) and networked distributed state synchronization (Java).',
    },
    architectureDetails: {
      pt: 'Inclui a implementação do clássico Algoritmo do Valentão (Bully Algorithm) utilizando OpenMPI em C para tolerância a falhas na coordenação de processos, além de uma versão multiplayer distribuída do jogo de tabuleiro oriental Go em Java.',
      en: 'Includes a C/OpenMPI implementation of the Bully leader-election protocol for fault-tolerant coordination, paired with a networked multiplayer implementation of the Go board game in Java.',
    },
    highlights: {
      pt: [
        'Comunicação entre processos paralelos via passagem de mensagens com MPI em C.',
        'Gerenciamento de sessões, turnos e consistência de estado em aplicação distribuída Java.',
        'Aplicação prática dos fundamentos teóricos de Sistemas Distribuídos da Ciência da Computação.',
      ],
      en: [
        'Parallel inter-process communication using MPI message passing in C.',
        'Session handling, turn synchronization, and state consistency in distributed Java.',
        'Practical realization of core Computer Science distributed systems theory.',
      ],
    },
    status: 'completed',
    visibility: 'public',
    partnerTag: {
      pt: 'Computação Distribuída',
      en: 'Distributed Computing',
    },
    techStack: ['C', 'MPI', 'Java', 'Sockets / Rede', 'Concorrência'],
    repoUrl: 'https://github.com/SantanaIsrael/JogoGo',
    featuredSpan: 'medium',
    accentGradient: 'from-blue-600/20 via-indigo-500/10 to-violet-500/20',
    year: '2024 — 2025',
  },
];

export const GITHUB_REPO_ENRICHMENTS: Record<string, RepoEnrichment> = {
  AHP_Sarah: {
    category: { pt: 'Apoio à Decisão · Python', en: 'Decision Support · Python' },
    description: {
      pt: 'Implementação computacional do método multicritério AHP (Analytic Hierarchy Process) em Python para análise ponderada e tomada de decisão.',
      en: 'Python implementation of the Analytic Hierarchy Process (AHP) multi-criteria decision-making method.',
    },
  },
  JogoGo: {
    category: { pt: 'Sistemas Distribuídos', en: 'Distributed Systems' },
    description: {
      pt: 'Implementação distribuída do jogo estratégico Go desenvolvida em Java para estudo de comunicação em rede e sincronização de estado.',
      en: 'Distributed multiplayer implementation of the classic Go board game built in Java.',
    },
  },
  Algoritmo_valentaoMPI: {
    category: { pt: 'Computação Paralela · MPI', en: 'Parallel Computing · MPI' },
    description: {
      pt: 'Simulação de eleição de coordenador em sistemas distribuídos utilizando o Algoritmo do Valentão (Bully) com MPI na linguagem C.',
      en: 'Distributed coordinator election simulation implementing the Bully Algorithm with C and MPI.',
    },
  },
  'watch-party': {
    category: { pt: 'Aplicação Web Sincronizada', en: 'Synced Web App' },
    description: {
      pt: 'Projeto voltado para reprodução e interação compartilhada de mídia em sessões sincronizadas na web.',
      en: 'Web project focused on synchronized shared media playback and real-time room interaction.',
    },
  },
  Blcokchain: {
    category: { pt: 'Criptografia & Web3', en: 'Cryptography & Ledger' },
    description: {
      pt: 'Aplicação demonstrativa de conceitos de Blockchain, encadeamento criptográfico de blocos e interface EJS desenvolvida na disciplina de TAC II.',
      en: 'Educational blockchain prototype demonstrating cryptographic block chaining and EJS web views.',
    },
  },
  ComputerGraphic: {
    category: { pt: 'Computação Gráfica', en: 'Computer Graphics' },
    description: {
      pt: 'Algoritmos de renderização, transformações geométricas 2D/3D e primitivas gráficas implementados em C.',
      en: 'Rendering primitives, 2D/3D geometric transformations, and graphics pipelines written in C.',
    },
  },
  'The-Bots': {
    category: { pt: 'Robótica & Embarcados', en: 'Robotics & Embedded' },
    description: {
      pt: 'Códigos de controle, sensores e automação em C++ desenvolvidos para projetos universitários de robótica.',
      en: 'C++ control routines, sensor integration, and automation firmware for university robotics.',
    },
  },
  'Numerical-Analysis': {
    category: { pt: 'Computação Científica', en: 'Scientific Computing' },
    description: {
      pt: 'Métodos numéricos em Python acompanhados de relatórios analíticos sobre convergência, erro e estabilidade.',
      en: 'Numerical analysis algorithms in Python paired with convergence and error reports.',
    },
  },
  programmingLanguage: {
    category: { pt: 'Paradigmas de Programação', en: 'Programming Paradigms' },
    description: {
      pt: 'Estudos comparativos de orientação a objetos, estruturas de dados e paradigmas de linguagens em Java e Python.',
      en: 'Comparative explorations of object-oriented design and language paradigms across Java and Python.',
    },
  },
};

export const FALLBACK_GITHUB_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'AHP_Sarah',
    html_url: 'https://github.com/SantanaIsrael/AHP_Sarah',
    description: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-09-15T12:00:00Z',
  },
  {
    id: 2,
    name: 'JogoGo',
    html_url: 'https://github.com/SantanaIsrael/JogoGo',
    description: 'Jogo que foi desenvolvido como parte de um crédito da disciplina de Sistemas Distribuídos.',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-07-20T12:00:00Z',
  },
  {
    id: 3,
    name: 'Algoritmo_valentaoMPI',
    html_url: 'https://github.com/SantanaIsrael/Algoritmo_valentaoMPI',
    description: null,
    language: 'C',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-06-18T12:00:00Z',
  },
  {
    id: 4,
    name: 'Blockchain',
    html_url: 'https://github.com/SantanaIsrael/Blcokchain',
    description: 'Projeto que foi desenvolvido como parte do crédito final da disciplina TAC II (Blockchain)',
    language: 'EJS',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-05-10T12:00:00Z',
  },
  {
    id: 5,
    name: 'ComputerGraphic',
    html_url: 'https://github.com/SantanaIsrael/ComputerGraphic',
    description: 'Códigos desenvolvidos ao longo da disciplina de Computação Gráfica',
    language: 'C',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-03-14T12:00:00Z',
  },
  {
    id: 6,
    name: 'The-Bots',
    html_url: 'https://github.com/SantanaIsrael/The-Bots',
    description: 'Códigos desenvolvidos para o projeto de robótica.',
    language: 'C++',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2025-11-22T12:00:00Z',
  },
  {
    id: 7,
    name: 'Numerical-Analysis',
    html_url: 'https://github.com/SantanaIsrael/Numerical-Analysis',
    description: 'Códigos desenvolvidos juntamente com relatório de análise das saídas.',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-09-05T12:00:00Z',
  },
  {
    id: 8,
    name: 'watch-party',
    html_url: 'https://github.com/SantanaIsrael/watch-party',
    description: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-05-28T12:00:00Z',
  },
];

export const TRAJECTORY_ITEMS: TrajectoryItem[] = [
  {
    id: 'traj-sappi',
    category: 'professional',
    sourceBadge: 'LinkedIn',
    title: {
      pt: 'Desenvolvedor Full Stack — Plataforma SAPPI',
      en: 'Full Stack Developer — SAPPI Platform',
    },
    organization: 'NIT-UESC · Núcleo de Inovação Tecnológica',
    period: { pt: '2025 — Atual', en: '2025 — Present' },
    summary: {
      pt: 'Desenvolvimento de sistema web institucional para gestão e acompanhamento de Propriedade Intelectual na UESC, aplicando Python, JavaScript, PostgreSQL e Docker.',
      en: 'Engineering an institutional web platform for Intellectual Property management at UESC using Python, JavaScript, PostgreSQL, and Docker.',
    },
    details: {
      pt: [
        'Estruturação de banco de dados relacional em PostgreSQL para tramitação segura de registros.',
        'Conteinerização completa da aplicação com Docker para padronizar ambientes de desenvolvimento e homologação.',
        'Construção de interfaces focadas em clareza operacional para pesquisadores e equipe técnica do NIT.',
      ],
      en: [
        'Designed PostgreSQL relational schemas supporting institutional IP tracking workflows.',
        'Containerized application services with Docker for consistent development and staging deployments.',
        'Built clean user interfaces tailored for researchers and NIT technical staff.',
      ],
    },
    tags: ['Python', 'PostgreSQL', 'JavaScript', 'Docker', 'Inovação'],
  },
  {
    id: 'traj-webgis',
    category: 'academic',
    sourceBadge: 'Lattes',
    title: {
      pt: 'Pesquisa & Desenvolvimento em WebGIS (WEBGIS_PMRRIOS)',
      en: 'WebGIS Research & Development (WEBGIS_PMRRIOS)',
    },
    organization: 'Universidade Estadual de Santa Cruz (UESC)',
    period: { pt: '2025 — Atual', en: '2025 — Present' },
    summary: {
      pt: 'Atuação no desenvolvimento de soluções voltadas para dados e informações geográficas na web, integrando ferramentas computacionais e análise espacial de recursos hídricos.',
      en: 'Developing web-based geographic information solutions combining software engineering and spatial hydrographic analysis.',
    },
    details: {
      pt: [
        'Integração de camadas espaciais e visualização cartográfica interativa via web.',
        'Empacotamento de dependências geoespaciais em containers Docker com backend Python.',
        'Articulação entre Ciência da Computação e demandas reais de monitoramento ambiental e territorial.',
      ],
      en: [
        'Interactive web visualization of spatial layers and cartographic datasets.',
        'Dockerized geospatial Python stack ensuring environment reproducibility.',
        'Bridging Computer Science engineering with environmental and territorial monitoring needs.',
      ],
    },
    tags: ['WebGIS', 'Python', 'Dados Espaciais', 'Docker', 'Pesquisa'],
    externalUrl: 'http://lattes.cnpq.br/5875369343046849',
  },
  {
    id: 'traj-robotics',
    category: 'academic',
    sourceBadge: 'Lattes',
    title: {
      pt: 'Projeto de Robótica Universitária — The-Bots',
      en: 'University Robotics Initiative — The-Bots',
    },
    organization: 'UESC · Ciência da Computação',
    period: { pt: '2023 — 2024', en: '2023 — 2024' },
    summary: {
      pt: 'Participação ativa na programação embarcada em C++ e Arduino, desenvolvendo rotinas de controle, leitura de sensores e tomada de decisão autônoma.',
      en: 'Embedded C++ and Arduino programming, developing control routines, sensor acquisition, and autonomous behavior.',
    },
    details: {
      pt: [
        'Desenvolvimento modular em C++ voltado para microcontroladores e robótica móvel.',
        'Experimentação prática de algoritmos de controle, calibração física e depuração em bancada.',
        'Colaboração em equipe multidisciplinar dentro do ambiente universitário.',
      ],
      en: [
        'Modular C++ firmware crafted for microcontrollers and mobile robotics.',
        'Hands-on sensor calibration, actuator control, and hardware debugging.',
        'Team-based engineering in an academic robotics lab environment.',
      ],
    },
    tags: ['C++', 'Arduino', 'Robótica', 'Extensão'],
    externalUrl: 'https://github.com/SantanaIsrael/The-Bots',
  },
  {
    id: 'traj-bsc-cs',
    category: 'academic',
    sourceBadge: 'UESC',
    title: {
      pt: 'Bacharelado em Ciência da Computação',
      en: 'B.Sc. in Computer Science',
    },
    organization: 'Universidade Estadual de Santa Cruz (UESC) · Ilhéus, BA',
    period: { pt: '2022 — Atual', en: '2022 — Present' },
    summary: {
      pt: 'Formação sólida em algoritmos, estruturas de dados, sistemas distribuídos, computação gráfica, análise numérica, bancos de dados e engenharia de software.',
      en: 'Comprehensive foundation in algorithms, distributed systems, computer graphics, numerical analysis, databases, and software engineering.',
    },
    details: {
      pt: [
        'Projetos práticos em Sistemas Distribuídos (MPI em C e aplicações distribuídas em Java).',
        'Implementações em Computação Gráfica (C), Análise Numérica (Python) e Blockchain.',
        'Foco atual em arquitetura full stack, bancos de dados relacionais e conteinerização.',
      ],
      en: [
        'Practical projects in Distributed Systems (MPI in C and networked Java applications).',
        'Coursework implementations in Computer Graphics (C), Numerical Analysis (Python), and Blockchain.',
        'Current specialization in full-stack architectures, relational databases, and containerization.',
      ],
    },
    tags: ['Ciência da Computação', 'Algoritmos', 'Sistemas Distribuídos', 'UESC'],
    externalUrl: 'http://lattes.cnpq.br/5875369343046849',
  },
];

export const INSTITUTIONAL_PARTNERS: InstitutionalPartner[] = [
  {
    id: 'partner-uesc',
    acronym: 'UESC',
    name: {
      pt: 'Universidade Estadual de Santa Cruz',
      en: 'Santa Cruz State University',
    },
    unitType: {
      pt: 'Universidade Pública · Ensino, Pesquisa & Extensão',
      en: 'Public University · Education, Research & Extension',
    },
    description: {
      pt: 'Instituição sede da graduação em Ciência da Computação e polo científico do sul da Bahia onde são desenvolvidos os projetos de pesquisa, sistemas distribuídos e iniciativas tecnológicas.',
      en: 'Home institution for my Computer Science degree and regional scientific hub in Southern Bahia hosting research, distributed computing, and software initiatives.',
    },
    relatedProjects: ['Ciência da Computação', 'SAPPI', 'WEBGIS_PMRRIOS', 'The-Bots'],
    location: 'Ilhéus — BA',
    website: 'https://www.uesc.br',
  },
  {
    id: 'partner-nit',
    acronym: 'NIT · UESC',
    name: {
      pt: 'Núcleo de Inovação Tecnológica da UESC',
      en: 'UESC Technological Innovation Center',
    },
    unitType: {
      pt: 'Núcleo Institucional · Propriedade Intelectual & Transferência de Tecnologia',
      en: 'Institutional Center · Intellectual Property & Tech Transfer',
    },
    description: {
      pt: 'Órgão responsável pela gestão da política de inovação, patentes e registros de software da universidade, parceiro direto na concepção e desenvolvimento da plataforma SAPPI.',
      en: 'University body managing innovation policy, patents, and software registrations, acting as the direct institutional partner behind the SAPPI platform.',
    },
    relatedProjects: ['SAPPI'],
    location: 'Ilhéus — BA',
    website: 'http://nit.uesc.br',
  },
  {
    id: 'partner-webgis',
    acronym: 'PMRRIOS · GIS',
    name: {
      pt: 'Núcleo & Projeto de Monitoramento e Geoprocessamento (WEBGIS_PMRRIOS)',
      en: 'Hydrographic & Spatial Monitoring Initiative (WEBGIS_PMRRIOS)',
    },
    unitType: {
      pt: 'Pesquisa Aplicada · Geotecnologias & Recursos Hídricos',
      en: 'Applied Research · Geotechnologies & Water Resources',
    },
    description: {
      pt: 'Frente colaborativa dedicada à estruturação de bases cartográficas e desenvolvimento de sistemas WebGIS para visualização e análise espacial de bacias e recursos hídricos.',
      en: 'Collaborative research front focused on cartographic data structuring and WebGIS development for river basin and environmental spatial analysis.',
    },
    relatedProjects: ['WEBGIS_PMRRIOS'],
    location: 'Bahia — Brasil',
  },
  {
    id: 'partner-robotics',
    acronym: 'THE-BOTS',
    name: {
      pt: 'Laboratório & Equipe Universitária de Robótica',
      en: 'University Robotics Laboratory & Team',
    },
    unitType: {
      pt: 'Grupo Acadêmico · Robótica & Sistemas Embarcados',
      en: 'Academic Group · Robotics & Embedded Systems',
    },
    description: {
      pt: 'Iniciativa acadêmica voltada à prototipagem eletrônica, programação de microcontroladores e desenvolvimento de algoritmos autônomos para robótica experimental.',
      en: 'Academic initiative dedicated to electronics prototyping, microcontroller programming, and autonomous algorithms for experimental robotics.',
    },
    relatedProjects: ['The-Bots'],
    location: 'UESC — Ilhéus, BA',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'skills-web',
    title: {
      pt: 'Desenvolvimento Web & Sistemas',
      en: 'Web & Systems Engineering',
    },
    subtitle: {
      pt: 'Construção de aplicações modernas, APIs e interfaces responsivas.',
      en: 'Building full-stack platforms, APIs, and responsive user interfaces.',
    },
    skills: [
      {
        name: 'Python',
        context: { pt: 'Backends web, automação, AHP e processamento espacial', en: 'Web backends, automation, AHP & spatial processing' },
      },
      {
        name: 'JavaScript / TypeScript',
        context: { pt: 'Interfaces interativas, WebGIS e aplicações React', en: 'Interactive UIs, WebGIS & React applications' },
      },
      {
        name: 'React & Tailwind CSS',
        context: { pt: 'Componentização moderna e design systems responsivos', en: 'Modern component architecture & responsive UI' },
      },
      {
        name: 'HTML5 & CSS3',
        context: { pt: 'Semântica web, acessibilidade e layouts fluidos', en: 'Semantic markup, accessibility & fluid layouts' },
      },
    ],
  },
  {
    id: 'skills-geo-data',
    title: {
      pt: 'Dados, Bancos Relacionais & WebGIS',
      en: 'Data, Relational DBs & WebGIS',
    },
    subtitle: {
      pt: 'Modelagem estruturada, persistência confiável e visualização espacial.',
      en: 'Structured data modeling, reliable persistence, and spatial visualization.',
    },
    skills: [
      {
        name: 'PostgreSQL',
        context: { pt: 'Modelagem relacional de sistemas institucionais (SAPPI)', en: 'Relational modeling for institutional systems (SAPPI)' },
      },
      {
        name: 'MySQL',
        context: { pt: 'Consultas SQL, normalização e persistência transacional', en: 'SQL querying, normalization & transactional storage' },
      },
      {
        name: 'WebGIS & Dados Geográficos',
        context: { pt: 'Mapas interativos e camadas espaciais (WEBGIS_PMRRIOS)', en: 'Interactive mapping & spatial layers (WEBGIS_PMRRIOS)' },
      },
      {
        name: 'Análise Numérica & Multicritério',
        context: { pt: 'Métodos numéricos e método AHP em Python', en: 'Numerical methods & AHP decision models in Python' },
      },
    ],
  },
  {
    id: 'skills-systems',
    title: {
      pt: 'Computação Científica, Concorrência & Embarcados',
      en: 'Systems, Concurrency & Embedded',
    },
    subtitle: {
      pt: 'Base sólida de Ciência da Computação em baixo nível e sistemas distribuídos.',
      en: 'Strong Computer Science fundamentals in low-level and distributed computing.',
    },
    skills: [
      {
        name: 'C & OpenMPI',
        context: { pt: 'Algoritmos distribuídos, computação paralela e gráfica', en: 'Distributed algorithms, MPI & computer graphics' },
      },
      {
        name: 'C++ & Arduino',
        context: { pt: 'Controle embarcado, sensores e robótica (The-Bots)', en: 'Embedded control, sensors & robotics (The-Bots)' },
      },
      {
        name: 'Java',
        context: { pt: 'Programação orientada a objetos e sistemas em rede (JogoGo)', en: 'OOP design & networked distributed apps (JogoGo)' },
      },
    ],
  },
  {
    id: 'skills-devops',
    title: {
      pt: 'Infraestrutura, Conteinerização & Fluxo',
      en: 'Infrastructure, Containers & Workflow',
    },
    subtitle: {
      pt: 'Ambientes reproduzíveis, controle de versão e entrega contínua.',
      en: 'Reproducible environments, version control, and automated delivery.',
    },
    skills: [
      {
        name: 'Docker & Docker Compose',
        context: { pt: 'Conteinerização de aplicações web, bancos e stacks GIS', en: 'Containerizing web apps, databases & GIS stacks' },
      },
      {
        name: 'Git & GitHub Actions',
        context: { pt: 'Versionamento colaborativo e CI/CD estático', en: 'Collaborative version control & static CI/CD' },
      },
      {
        name: 'Linux',
        context: { pt: 'Ambiente diário de desenvolvimento, shell e servidores', en: 'Daily development environment, shell & servers' },
      },
    ],
  },
];
