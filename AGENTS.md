# AGENTS.md - Guia para Agentes de IA

Bem-vindo ao QA Labs! Este arquivo orienta agentes de IA sobre as convenções, estrutura e melhores práticas do projeto.

## Sobre o Projeto

**QA Labs** é um laboratório prático focado em qualidade de software, técnicas de teste e automação, publicado com Astro + Starlight e direcionado a aprendizado progressivo de QA.

Veja [CLAUDE.md](CLAUDE.md) para detalhes técnicos completos sobre arquitetura, deployment e convenções de conteúdo.

## Guia Rápido para Agentes

### Estrutura de Arquivos

```
src/content/docs/
  └─ fundamentos/
     ├─ 00-indice.md         (Página de entrada da seção)
     ├─ 01-*.md, 02-*.md     (Notas ordenadas sequencialmente)
     └─ ...
  ├─ mapa-de-estudo.md       (Guia de navegação)
  └─ 404.md

examples/
  ├─ exercises.md            (Enunciados de exercícios práticos)
  ├─ projects.md             (Projetos integradores)
  └─ README.md
```

### Comandos Essenciais

```bash
npm run dev      # Servidor local em http://localhost:4321/qa-labs/
npm run build    # Build de produção
npm run preview  # Preview do build
```

### Convenções de Conteúdo (⚠️ Obrigatório)

Todos os arquivos Markdown em `src/content/docs/` **devem** ter frontmatter com essa estrutura:

```yaml
---
title: "Título da página (sem h1 repetido)"
description: "Resumo curto explicando o foco (20-60 caracteres)."
lastUpdated: 2026-04-27
sidebar:
  order: 1 # Sequencial dentro do diretório (não global)
tags: ["qa", "tema-específico", "nível"] # Ex: iniciante, intermediário
---
## Primeira Seção

Conteúdo...
```

**Regras críticas:**

- ❌ Não repita o `title` como `# h1` - Starlight renderiza automaticamente
- ✅ Use `##` e `###` para seções internas
- ✅ `sidebar.order` é **sequencial por diretório**, não global (ex: dois arquivos diferentes podem ter `order: 1`)
- ✅ A ordem entre seções é controlada pelo array `sidebar` em `astro.config.mjs`

### Paths e Links Internos

- ⚠️ **Todos os links internos devem incluir o prefixo `/qa-labs`** (base path obrigatório para deployment)
- Exemplo: `[Mentalidade de Tester](/qa-labs/01-mentalidade-de-tester/)`

### Adicionar Nova Seção Superior

Se quiser criar uma nova seção (ex: `automacao/`):

1. Crie o diretório: `src/content/docs/automacao/`
2. Adicione um `index.md` como página de entrada
3. Atualize `astro.config.mjs`:
   ```javascript
   {
     label: "Automação",
     autogenerate: { directory: "automacao" }
   }
   ```
4. Numere os arquivos dentro da pasta: `01-*.md`, `02-*.md`, etc.

## Linguagem e Estilo

- **Idioma:** Português (pt-BR)
- **Tom:** Educacional, progressivo, acessível
- **Público:** Pessoas aprendendo QA (iniciante → avançado)
- **Estrutura:** Conceitos → Contexto → Prática (exemplos e exercícios)

## Quando Intervir (e Quando Não)

### ✅ Agentes devem:

- Criar/editar notas em `src/content/docs/` seguindo as convenções acima
- Adicionar exemplos práticos em `examples/`
- Sugerir e implementar novos artigos/seções quando alinhado com o roadmap de QA
- Validar links internos (incluem `/qa-labs`?)
- Verificar frontmatter (todos os campos obrigatórios?)

### ❌ Agentes **não devem**:

- Fazer `git commit` ou `git push` automaticamente (apenas quando explicitamente solicitado)
- Modificar `astro.config.mjs` ou `package.json` sem aprovação
- Alterar `base` path ou URLs de deployment
- Criar conteúdo fora do escopo QA/testes

## Recursos Úteis

- [Documentação Astro](https://docs.astro.build/)
- [Documentação Starlight](https://starlight.astro.build/)
- [CLAUDE.md](CLAUDE.md) - Referência técnica completa
