# Guia de Contribuição

Obrigado por querer contribuir com o QA Labs!

## O que pode ser contribuído

- Melhorias e correções nas anotações (`notes/`)
- Novos exemplos práticos em `examples/`
- Exercícios adicionais em `examples/exercises.md`
- Projetos práticos em `examples/projects.md`

Melhorias no **site** (visual, navegação, deploy) são feitas no repositório hub [labs](https://github.com/caramelotech/labs).

## Processo

1. Crie uma branch a partir de `main` seguindo o padrão:

   ```
   feature/descricao-curta
   fix/descricao-curta
   docs/descricao-curta
   ```

2. Faça commits atômicos com mensagens no padrão de Conventional Commits:

   ```
   feat: adicionar anotações sobre tipos de teste
   fix: corrigir exemplo de código
   docs: melhorar introdução
   ```

   Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`

3. Abra um Pull Request usando o template disponível e aguarde revisão.

4. Após aprovação, o merge será feito por um mantenedor. As notas são publicadas automaticamente no [site do Caramelo Labs](https://caramelotech.com.br/labs/qa/) após o merge.

## Padrões de conteúdo

### Anotações (`notes/`)

As notas são **Markdown puro, sem frontmatter**:

- Escreva em português
- Comece o arquivo com o título: `# Título da Nota` (primeira linha)
- Use títulos hierárquicos (`##`, `###`) para as seções
- Prefira exemplos curtos e diretos
- Inclua o "por quê", não apenas o "como"
- Nomeie os arquivos com prefixo numérico sequencial dentro da pasta: `02-nome-do-topico.md`
- Imagens ficam junto das notas (ex: `notes/secao/assets/img.png`) e são referenciadas com caminho relativo: `![descrição](./assets/img.png)`
- Ao criar uma nova subpasta de tema, adicione a seção em `sidebar.json`

### Exercícios (`examples/exercises.md`)

- Descreva claramente o objetivo
- Indique o nível de dificuldade (iniciante / intermediário / avançado)
- Inclua critérios de sucesso em formato de checklist

### Projetos (`examples/projects.md`)

- Descreva o objetivo e o contexto
- Liste os requisitos em formato de checklist
- Inclua ao menos um exemplo de entregável esperado

## Visualizando as notas no site

Não é necessário rodar nada para contribuir - as notas são Markdown puro e podem ser revisadas direto no GitHub. Se quiser ver como ficam no site, clone o repositório hub ao lado deste e rode lá:

```bash
git clone https://github.com/caramelotech/labs
cd labs
npm install
npm run fetch:local   # usa o clone local deste repositório
npm run dev           # localhost:4321
```

## Dúvidas?

Abra uma issue com a tag `question`.
