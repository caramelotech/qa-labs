# Guia de Contribuição

Obrigado por querer contribuir com o QA Labs!

## O que pode ser contribuido

- Melhorias e correções nas anotações (`/notes`)
- Novos exemplos práticos em `/examples`
- Exercícios adicionais em `/exercicios`
- Projetos práticos em `/projetos`

## Processo

1. Crie uma branch a partir de `main` seguindo o padrão:
   ```
   feature/descricao-curta
   fix/descricao-curta
   docs/descricao-curta
   ```

2. Faça commits atômicos com mensagens no padrão de Conventional Commits:
   ```
   feat: adicionar anotações sobre testes de API
   fix: corrigir descrição de teste exploratório
   docs: melhorar exercício de levantamento de riscos
   ```

   Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`

3. Abra um Pull Request usando o template disponível e aguarde revisão.

4. Após aprovação, o merge será feito por um mantenedor.

## Padrões de conteúdo

### Anotações (Markdown)

- Escreva em português
- Use títulos hierárquicos (`##`, `###`)
- Prefira exemplos curtos e diretos
- Inclua o "por quê", não apenas o "como"
- Nomeie os arquivos com prefixo numérico sequencial: `03-nome-do-topico.md`
- Atualize o índice em `notes/README.md` ao adicionar um novo tópico

### Exemplos (`/examples`)

- Um conceito por pasta, nomeada com prefixo sequencial: `01-nome-do-exemplo/`
- Inclua um comentário ou contexto explicando o que o exemplo demonstra
- Use situações reais ou próximas do cotidiano de QA

### Exercícios (`/exercicios`)

- Descreva claramente o objetivo
- Indique o nível de dificuldade (iniciante / intermediário / avançado)
- Inclua exemplos de saída ou critérios de sucesso em formato de checklist

### Projetos (`/projetos`)

- Descreva o objetivo e o contexto
- Liste os requisitos em formato de checklist
- Inclua ao menos um exemplo de entregável esperado
- Adicione dicas para quem está começando

## Dúvidas?

Abra uma issue com a tag `question`.
