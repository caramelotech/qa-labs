# Guia de Contribuicao

Obrigado por querer contribuir com o QA Labs.

## O que pode ser contribuido

- Melhorias e correcoes nas anotacoes em `src/content/docs/`
- Novos exemplos praticos em `examples/`
- Exercicios adicionais em `examples/exercises.md`
- Projetos praticos em `examples/projects.md`
- Melhorias no site Astro + Starlight

## Processo

1. Crie uma branch a partir de `main` seguindo o padrao:

   ```text
   feature/descricao-curta
   fix/descricao-curta
   docs/descricao-curta
   ```

2. Faca commits atomicos com mensagens no padrao de Conventional Commits:

   ```text
   feat: adicionar anotacoes sobre testes de api
   fix: corrigir descricao de teste exploratorio
   docs: melhorar exercicio de levantamento de riscos
   ```

3. Abra um Pull Request usando o template disponivel.

4. Apos aprovacao, o merge sera feito por um mantenedor.

## Rodando o site localmente

```bash
npm install
npm run dev
```

O site fica disponivel em `http://localhost:4321`.

Para validar antes de abrir o PR:

```bash
npm run build
npm run preview
```

## Padroes de conteudo

### Anotacoes em `src/content/docs/`

- Escreva em portugues
- Use titulos hierarquicos (`##`, `###`)
- Prefira exemplos curtos e diretos
- Inclua o "por que", nao apenas o "como"
- Nomeie os arquivos com prefixo numerico sequencial
- Use frontmatter Starlight completo

Frontmatter recomendado:

```yaml
---
title: "Titulo da nota"
description: "Resumo curto explicando o foco da pagina."
lastUpdated: 2026-01-01
sidebar:
  order: 4
tags: ["qa", "tema", "iniciante"]
---
```

### Exemplos em `examples/`

- Um conceito por pasta ou arquivo quando fizer sentido
- Inclua um contexto explicando o que o exemplo demonstra
- Use situacoes reais ou proximas do cotidiano de QA

### Exercicios em `examples/exercises.md`

- Descreva claramente o objetivo
- Indique o nivel de dificuldade quando necessario
- Inclua criterios de sucesso em formato de checklist

### Projetos em `examples/projects.md`

- Descreva o objetivo e o contexto
- Liste os requisitos em formato de checklist
- Inclua ao menos um exemplo de entregavel esperado
- Adicione dicas para quem esta comecando

## Duvidas

Abra uma issue com a tag `question`.
