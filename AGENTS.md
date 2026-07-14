# AGENTS.md

Orientações especializadas para agentes de IA trabalhando com este repositório de conteúdo.

## Contexto do Projeto

Este é o repositório de **conteúdo** do QA Labs (Caramelo Tech):

- **Conteúdo:** 100% em `notes/`, Markdown puro em português brasileiro, sem frontmatter
- **Publicação:** o repositório hub [labs](https://github.com/caramelotech/labs) busca as notas daqui e publica em `https://caramelotech.com.br/labs/qa/`
- **Sem build:** não há dependências, testes ou comandos - apenas Markdown

Veja [CLAUDE.md](CLAUDE.md) para detalhes completos.

## Tarefas Comuns

### Adicionar uma nova nota

1. **Escolha o local:** `fundamentos/` ou uma nova subpasta de tema
2. **Nomeie com prefixo numérico** para controlar a ordem na barra lateral
3. **Primeira linha = título:** comece o arquivo com `# Título da Nota` - o site usa esse H1 como título da página
4. **Sem frontmatter:** escreva direto o Markdown

Exemplo de nota nova (`notes/fundamentos/03-tipos-de-teste.md`):

```markdown
# Tipos de Teste

## Introdução

Conteúdo aqui...
```

### Criar nova seção de tema

1. Crie a subpasta em `notes/nova-secao/` com ao menos uma nota
2. Adicione a seção em `sidebar.json`:
   ```json
   { "label": "Título da Seção", "directory": "nova-secao" }
   ```

## Regras de Conteúdo

- Use **hífens (-)**, não travessões (—)
- NÃO use `---` para separar seções (apenas para notas/atribuições no final do arquivo)
- Apenas um `# H1` por arquivo, na primeira linha
- Imagens ficam junto das notas e são referenciadas com caminho relativo em sintaxe Markdown: `![descrição](./assets/img.png)` - nunca `<img>` HTML nem caminho absoluto
- Links para outras notas do site: caminho completo `/labs/qa/<secao>/<nota>/`

## Publicação

- Push em `main` alterando `notes/` ou `sidebar.json` dispara o workflow `notify-hub.yml`, que aciona o rebuild do site no hub
- O workflow requer o secret `HUB_DISPATCH_TOKEN` configurado no repositório
- Para validar como a nota fica no site, rode no clone do hub: `npm run fetch:local && npm run build`

## Git Conventions

- **NUNCA** fazer `git commit` ou `git push` automaticamente
- Apenas executar comandos git quando explicitamente solicitado pelo usuário
- Comunicar claramente o que será commitado antes de executar

Para informações adicionais, ver [CLAUDE.md](CLAUDE.md).
