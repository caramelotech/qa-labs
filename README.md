# QA Labs

Base de conhecimento sobre **qualidade de software** do Caramelo Tech - testes, mentalidade de tester e práticas de QA.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

As notas deste repositório são publicadas no site do [Caramelo Labs](https://caramelotech.com.br/labs/qa/).

## Conteúdo

| Tópico | Descrição |
| ------ | --------- |
| Fundamentos | Mentalidade de tester e testes em diferentes contextos |
| Mapa de Estudo | Trilha de estudos para QA |

## Estrutura do repositório

```
qa-labs/
├── notes/           → Anotações em Markdown puro (publicadas no site do Caramelo Labs)
├── sidebar.json     → Seções da barra lateral no site
├── examples/        → Exemplos, exercícios e projetos práticos
└── LICENSE
```

Este repositório contém **apenas conteúdo** - não há build, dependências ou configuração de site. A estrutura web (Astro + Starlight) vive no repositório hub [labs](https://github.com/caramelotech/labs), que busca as notas daqui a cada atualização e publica o site.

## Escrevendo notas

As notas em `notes/` são Markdown puro, sem frontmatter:

- A primeira linha da nota deve ser o título: `# Título da Nota`
- Use prefixo numérico no nome do arquivo para controlar a ordem na barra lateral: `01-introducao.md`, `02-conceitos.md`
- Agrupe por tema em subpastas
- Imagens ficam junto das notas (ex: `notes/secao/assets/img.png`) e são referenciadas com caminho relativo: `![descrição](./assets/img.png)`
- Links para outras notas do site usam o caminho completo: `/labs/qa/<secao>/<nota>/`

Ao criar uma nova subpasta de tema, adicione a seção correspondente em `sidebar.json`.

## Como usar

1. Comece pelas anotações em `notes/` (ou pelo [site](https://caramelotech.com.br/labs/qa/))
2. Explore os exemplos em `examples/`
3. Resolva os exercícios em `examples/exercises.md`
4. Construa os projetos em `examples/projects.md`

## Contribuição

Contribuições são bem-vindas! Veja o [Guia de Contribuição](.github/CONTRIBUTING.md) para detalhes.

## Licença

MIT
