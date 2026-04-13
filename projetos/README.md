# Projetos

Mini projetos para aplicar o que foi aprendido de forma integrada.

## Como usar

1. Leia o enunciado do projeto
2. Planeje antes de executar - defina escopo, abordagem e critérios de aceite
3. Implemente incrementalmente
4. Documente suas descobertas

## Projeto 01 - Plano de Testes para uma Feature

**Objetivo:** Elaborar um plano de testes completo para uma funcionalidade real ou simulada.

**Descrição:**
Escolha uma feature simples (ex: formulário de cadastro, tela de login, carrinho de compras) e crie um plano de testes cobrindo diferentes abordagens.

**Requisitos:**

- [ ] Descrição da feature e do contexto
- [ ] Levantamento de riscos (ao menos 3)
- [ ] Casos de teste para o caminho feliz
- [ ] Casos de teste para cenários negativos/alternativos
- [ ] Identificação de qual camada cada teste valida (UI, API, banco de dados)

**Exemplo de saída:**

```
Feature: Login de usuário
Risco: Usuário consegue acessar conta com credenciais inválidas

Caso de teste 01 - Caminho feliz
  Dado que o usuário tem cadastro ativo
  Quando informa email e senha corretos
  Então é redirecionado para a tela inicial

Caso de teste 02 - Senha incorreta
  Dado que o usuário tem cadastro ativo
  Quando informa senha incorreta
  Então vê mensagem de erro e permanece na tela de login
```

**Dica:**
Comece pelo caminho feliz. Quando documentado, pense em tudo que pode sair errado.
