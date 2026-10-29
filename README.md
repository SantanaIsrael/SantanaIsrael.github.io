# Portfólio — Israel Santana

Portfólio estático minimalista inspirado na linguagem visual da **Apple** combinado com superfícies em **Liquid Glass**, integrando projetos em desenvolvimento, repositórios públicos do **GitHub (`@SantanaIsrael`)**, trajetória acadêmica do **Currículo Lattes (`CNPq`)**, competências técnicas e **Parcerias Institucionais**.

---

## Como executar localmente (100% via Docker)

Não é necessário instalar Node.js no sistema operacional host.

### 1. Servidor de desenvolvimento (Hot Reload)
```bash
docker compose up
```
Acesse no navegador: **http://localhost:5173**

### 2. Gerar build estático de produção (`dist/`)
```bash
docker compose --profile tools run --rm build
```

---

## Como atualizar dados do Currículo Lattes (XML CNPq)

1. Acesse a plataforma Lattes do CNPq, entre no seu currículo e clique em **Exportar XML** (descompacte se vier em `.zip`).
2. Salve o arquivo como `lattes/curriculo.xml`.
3. Rode o conversor via Docker:
```bash
docker compose --profile tools run --rm import-lattes
```
O script converte automaticamente os dados (suportando tanto `ISO-8859-1` padrão do CNPq quanto `UTF-8`) e atualiza `src/data/lattes.json`.

---

## Onde editar conteúdos curados

- **Projetos em Destaque (`SAPPI`, `WEBGIS_PMRRIOS`, `The-Bots`), Parcerias Institucionais e Skills:** `src/data/portfolio.ts`
- **Currículo em PDF para download:** substitua o arquivo `public/cv-israel-santana.pdf` pelo seu PDF oficial mantendo o mesmo nome.

---

## Publicação no GitHub Pages

O projeto já inclui o workflow `.github/workflows/deploy.yml`:
1. Crie um repositório no GitHub (ex.: `SantanaIsrael.github.io` ou `portifolio`).
2. Em **Settings → Pages → Build and deployment**, selecione **Source: GitHub Actions**.
3. Faça `git push` para a branch `main` — o deploy será executado automaticamente!
