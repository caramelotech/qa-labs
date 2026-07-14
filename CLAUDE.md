# CLAUDE.md

Orientações para agentes de IA que trabalham neste repositório.

## Visão geral

Repositório de **conteúdo puro** do QA Labs (Caramelo Tech). Contém apenas notas em Markdown - não há build, dependências, testes ou linting.

As notas são publicadas no site do Caramelo Labs em `https://caramelotech.com.br/labs/qa/`. Quem monta e publica o site é o repositório hub [labs](https://github.com/caramelotech/labs): a cada push em `main` que altere `notes/` ou `sidebar.json`, o workflow `.github/workflows/notify-hub.yml` dispara o rebuild do hub via `repository_dispatch`.

## Estrutura

```
notes/           # Notas em Markdown puro - cada arquivo vira uma página no site
  index.md       # Página de entrada do lab no site
  fundamentos/          # Mentalidade de tester, testes em contextos
  mapa-de-estudo.md     # Trilha de estudos para QA
sidebar.json     # Seções da barra lateral no site (labels e ordem)
examples/        # Exercícios e projetos práticos (não publicados no site)
```

## Escrevendo notas

As notas NÃO usam frontmatter. Regras:

- **A primeira linha da nota deve ser o título como `# H1`** - no site, ela vira o `title` da página (o hub injeta o frontmatter automaticamente)
- Use `##` e `###` para as demais seções (apenas um `#` por arquivo, na primeira linha)
- Prefixo numérico no nome do arquivo controla a ordem na barra lateral dentro da pasta: `01-nome.md`, `02-nome.md`
- Imagens ficam junto das notas (ex: `notes/secao/assets/img.png`), referenciadas com caminho relativo em sintaxe Markdown: `![descrição](./assets/img.png)` - nunca use tags HTML `<img>` nem caminhos absolutos
- Links para outras notas do site usam o caminho completo: `/labs/qa/<secao>/<nota>/`
- Frontmatter ainda é aceito para campos extras (`description`, `tags`), mas o padrão é não usar

### Nova seção de tema

1. Crie a subpasta em `notes/nova-secao/` com as notas
2. Adicione a seção em `sidebar.json`:
   ```json
   { "label": "Título da Seção", "directory": "nova-secao" }
   ```

## Convenções e preferências

- Idioma: português brasileiro (pt-BR)
- Usar hífens (-) em vez de travessões (—) em todos os textos
- Em Markdown, NÃO usar `---` para separar seções (exceto para notas/atribuições no final do arquivo)
- **Git:** Nunca fazer `git commit` ou `git push` automaticamente - apenas quando explicitamente solicitado

## Recursos úteis

- [labs (hub)](https://github.com/caramelotech/labs) - estrutura do site, script de fetch e deploy
