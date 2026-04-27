# QA Labs

> Laboratorio pratico da Caramelo Tech com foco em qualidade de software, tecnicas de teste e automacao.

Bem-vindo ao **QA Labs**. Este repositorio reune notas publicadas com Astro + Starlight, exercicios e projetos para apoiar o aprendizado pratico em qualidade de software.

## O que voce vai encontrar

- Anotacoes sobre mindset, processos e tecnicas de QA
- Exemplos praticos de abordagens de teste
- Exercicios para fixar os conceitos
- Mini projetos para aplicar o aprendizado

## Estrutura do repositorio

```text
qa-labs/
├── src/content/docs/
│   └── fundamentos/    -> Mindset, processos e fundamentos de QA
├── examples/           -> Exemplos de codigo, exercicios e projetos praticos
└── .github/            -> Workflows, templates e guias de contribuicao
```

### Navegacao rapida

| Secao      | Descricao                    | Link                                               |
| ---------- | ---------------------------- | -------------------------------------------------- |
| Notas      | Topicos teoricos organizados | [src/content/docs/](src/content/docs/)             |
| Exemplos   | Exemplos praticos de QA      | [examples/README.md](examples/README.md)           |
| Exercicios | Exercicios para praticar     | [examples/exercises.md](examples/exercises.md)     |
| Projetos   | Projetos para construir      | [examples/projects.md](examples/projects.md)       |
| Contribuir | Como contribuir              | [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) |

## Como usar

1. Comece pelas anotacoes em [`src/content/docs/`](http://caramelotech.com.br/qa-labs/)
2. Resolva os desafios em `examples/exercises.md`
3. Construa os projetos em `examples/projects.md`

## Rodando localmente

```bash
npm install
npm run dev
```

O servidor local fica em `http://localhost:4321`.

Outros comandos uteis:

```bash
npm run build
npm run preview
```

Versao publicada:

`https://caramelotech.github.io/qa-labs`

## Adicionando notas

Novas anotacoes devem ser criadas em `src/content/docs/`. Use nomes claros e prefixos numericos quando fizer parte da trilha.

Exemplo de frontmatter padrao Starlight:

```md
---
title: "Titulo da nota"
description: "Resumo curto explicando o foco da pagina."
lastUpdated: 2026-01-01
sidebar:
  order: 4
tags: ["qa", "tema", "iniciante"]
---
```

## Sobre a Caramelo Tech

A Caramelo Tech e uma iniciativa focada em aprendizado pratico de tecnologia. Aqui voce nao apenas le: voce constroi.

## Contribuicao

Contribuicoes sao bem-vindas. Veja o [Guia de Contribuicao](.github/CONTRIBUTING.md) para mais detalhes.

## Licenca

MIT
