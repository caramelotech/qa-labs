# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o lab

QA Labs é um laboratório prático da Caramelo Tech focado em qualidade de software, técnicas de teste e automação. O conteúdo é publicado com Astro + Starlight e direcionado a pessoas que querem aprender QA de forma progressiva.

## Comandos

```bash
npm install        # instala dependências
npm run dev        # servidor local em http://localhost:4321/qa-labs/
npm run build      # build de produção
npm run preview    # preview do build
```

## Arquitetura

- `src/content/docs/` - notas e estudos publicados no site
- `examples/` - exemplos de código, exercícios (`exercises.md`) e projetos (`projects.md`)
- `astro.config.mjs` - configuração do Astro/Starlight (sidebar, social, base path)
- `src/styles/custom.css` - customizações de estilo

## Deployment

O deploy é feito via GitHub Actions. A configuração `base: '/qa-labs'` em `astro.config.mjs` é obrigatória - todos os links internos devem incluir esse prefixo.

## Convenções de conteúdo

- Idioma: português (pt-BR)
- Não repita o `title` como `# h1` - o Starlight renderiza automaticamente
- Use `##` e `###` para seções
- Frontmatter obrigatório:
  ```yaml
  ---
  title: "Título da nota"
  description: "Resumo curto explicando o foco da página."
  lastUpdated: 2026-01-01
  sidebar:
    order: 1
  tags: ["qa", "tema", "iniciante"]
  ---
  ```

## Regra do sidebar.order

**`sidebar.order` é sequencial por diretório**, não global. A ordem entre seções é controlada pelo array `sidebar` em `astro.config.mjs`. Dentro de cada pasta, numere os arquivos a partir de 1.

Para adicionar uma nova seção superior (ex: `automacao/`):
1. Crie o diretório em `src/content/docs/automacao/`
2. Adicione um arquivo `index.md` como página de entrada
3. Adicione uma entrada `autogenerate` em `astro.config.mjs`:
   ```javascript
   {
     label: "Automação",
     autogenerate: { directory: "automacao" },
   }
   ```
