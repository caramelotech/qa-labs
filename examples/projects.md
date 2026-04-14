# Projetos

Mini projetos para aplicar o que foi aprendido de forma integrada.

## Como usar

1. Leia o enunciado do projeto
2. Planeje antes de executar
3. Implemente incrementalmente
4. Documente suas descobertas

## Projeto 01 - Plano de Testes para uma Feature

**Objetivo:** Elaborar um plano de testes completo para uma funcionalidade real ou simulada.

**Descricao:**
Escolha uma feature simples, como formulario de cadastro, tela de login ou carrinho de compras, e crie um plano de testes cobrindo diferentes abordagens.

**Requisitos:**

- [ ] Descricao da feature e do contexto
- [ ] Levantamento de riscos com ao menos 3 itens
- [ ] Casos de teste para o caminho feliz
- [ ] Casos de teste para cenarios negativos ou alternativos
- [ ] Identificacao de qual camada cada teste valida, como UI, API ou banco de dados

**Exemplo de saida:**

```text
Feature: Login de usuario
Risco: Usuario consegue acessar conta com credenciais invalidas

Caso de teste 01 - Caminho feliz
  Dado que o usuario tem cadastro ativo
  Quando informa email e senha corretos
  Entao e redirecionado para a tela inicial
```

**Dica:**
Comece pelo caminho feliz. Quando ele estiver documentado, pense em tudo que pode sair errado.
