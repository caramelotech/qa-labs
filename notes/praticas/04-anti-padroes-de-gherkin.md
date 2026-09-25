# Anti-padrões de Gherkin

Existe um jeito de aprender Gherkin que funciona bem: olhar cenários ruins, entender por que eles incomodam e reescrever. É o que esta nota faz com cinco anti-padrões que aparecem em quase todo projeto que usa Cucumber, seguindo a lista do artigo "Como escrever cenários melhores conhecendo anti-padrões de Cucumber", de Danielle Moreira, à época QA na Resultados Digitais.

Os exemplos aqui são novos, mas o raciocínio é o do artigo. Antes de seguir, vale conhecer a base na nota [Gherkin e Cucumber](/labs/qa/praticas/03-gherkin-e-cucumber/).

## Por que aprender o que não fazer

Um cenário Gherkin tem dois leitores: o Cucumber, que só precisa que o texto case com uma step definition, e as pessoas, que precisam entender a regra de negócio. Os anti-padrões quase sempre atendem ao primeiro e falham com o segundo.

O custo aparece depois: mudanças pequenas na tela obrigam a reescrever arquivos `.feature`, um cenário que falha não explica o que quebrou, e a documentação viva vira uma pilha de detalhes que ninguém abre.

Uma observação importante para quem for reescrever: cada correção abaixo resolve um problema por vez. Depois de aplicar uma, o cenário ainda pode ter outros defeitos, e tudo bem. Melhorar em etapas dá menos trabalho do que tentar acertar tudo de primeira.

## Descrever elementos da interface

O primeiro anti-padrão é escrever o cenário em termos de campo, botão e clique. É um reflexo comum de quem começa, e muitos exemplos na internet fazem exatamente assim.

Ruim:

```gherkin
Cenário: Login com credenciais válidas
  Dado que estou na página de login
  Quando digito "ana" na caixa de texto "usuário"
  E digito "segredo123" na caixa de texto "senha"
  E clico no botão "Entrar"
  Então vejo o texto "Bem-vinda, Ana" no topo da página
```

As palavras que entregam o problema são _caixa de texto_, _clico_ e _botão_. Se amanhã o botão virar um link, ou o login passar a pedir código por SMS, o comportamento de negócio ("uma pessoa com credenciais válidas entra") continua o mesmo, mas o cenário precisa ser reescrito, e depois as step definitions também.

Melhor, em um nível de abstração acima:

```gherkin
Cenário: Login com credenciais válidas
  Dado que Ana tem uma conta ativa
  Quando ela faz login com suas credenciais
  Então ela acessa a sua área logada
```

Agora, se a interface mudar sem alterar o comportamento, o `.feature` fica intacto e só o código dos passos é ajustado. É o mesmo princípio dos cenários declarativos.

## Mais de uma regra de negócio no mesmo cenário

Outra dúvida frequente é onde termina o escopo de um cenário. A regra de bolso: **uma regra de negócio por cenário**. Se aparecer um segundo "e também", provavelmente são dois cenários.

Ruim:

```gherkin
Cenário: Cupom de desconto e frete
  Dado que o carrinho tem o total de 250 reais
  Quando aplico o cupom "PRIMEIRA10"
  Então o total passa a ser 225 reais
  E o frete é gratuito
```

Aqui estão duas regras juntas: o desconto do cupom e a regra de frete grátis. Se o cálculo do desconto estiver com erro, o cenário falha antes de mostrar se o frete está certo. Ficam duas dúvidas embutidas em um só resultado.

Melhor, separando:

```gherkin
Cenário: Cupom de primeira compra aplica 10% de desconto
  Dado que o carrinho tem o total de 250 reais
  Quando aplico o cupom "PRIMEIRA10"
  Então o total passa a ser 225 reais

Cenário: Compras a partir de 200 reais têm frete grátis
  Dado que o carrinho tem o total de 250 reais
  Quando escolho a entrega padrão
  Então o frete é gratuito
```

Cada cenário verifica uma coisa, é mais confiável e, quando falha, aponta para a regra que quebrou. É o princípio da responsabilidade única aplicado a especificação.

## Nome de cenário ruim

O nome é a primeira coisa que aparece no relatório quando o teste falha. Se ele não diz o que o cenário simula, você precisa ler o cenário inteiro para descobrir.

Ruim:

```gherkin
Cenário: Saque sem sucesso
  Dado que a conta tem saldo de 100 reais
  Quando o cliente tenta sacar 300 reais
  Então o saque é recusado
  E o cliente vê a mensagem "Saldo insuficiente"
```

"Sem sucesso" diz que deu errado, mas não por quê. O motivo só aparece no fim do cenário.

Melhor:

```gherkin
Cenário: Valor solicitado maior que o saldo disponível
  Dado que a conta tem saldo de 100 reais
  Quando o cliente tenta sacar 300 reais
  Então o saque é recusado
  E o cliente vê a mensagem "Saldo insuficiente"
```

O nome agora descreve a situação, não o resultado. Como o Cucumber existe para servir de documentação viva, o nome também é o item de um "índice" de regras do sistema.

Uma dica que ajuda a quem trava nessa hora: escreva o nome por último. Com o `Quando` (a ação) e o `Então` (o resultado) já no papel, o nome praticamente sai deles.

## Descrever o cenário como teste manual

É fácil escrever cenário como se fosse um roteiro de teste manual, passo a passo. Com o tempo, dá para perceber que o mais importante do cenário é **o que ele quer validar**, e não como a validação é feita.

Ruim:

```gherkin
Cenário: Cadastro com e-mail já usado
  Dado que existe um usuário com o e-mail "ana@exemplo.com"
  E que estou na tela de cadastro
  Quando preencho o nome com "Bia"
  E preencho o e-mail com "ana@exemplo.com"
  E preencho a senha com "segredo123"
  E submeto o formulário
  Então o formulário é exibido novamente
  E vejo a mensagem "E-mail já cadastrado"
```

Detalhes como preencher nome e senha, submeter o formulário e ver o formulário exibido de novo não ajudam a entender a regra, que é "não pode haver dois usuários com o mesmo e-mail". Eles ficam implícitos na descrição e, se necessário, entram na step definition.

Melhor:

```gherkin
Cenário: Cadastro com e-mail já utilizado
  Dado que existe um usuário com o e-mail "ana@exemplo.com"
  Quando alguém tenta se cadastrar com o mesmo e-mail
  Então vejo a mensagem "E-mail já cadastrado"
```

Esse anti-padrão é primo do primeiro, mas o foco muda: lá o problema é o vocabulário da interface, aqui é o excesso de passos que não contribuem para a regra. Quando você não sabe se um passo é necessário, tente removê-lo: se a regra continua clara, ele sobrava.

## Usar Given, When e Then no lugar errado

O Cucumber não distingue as três palavras na hora de executar, mas quem lê distingue. Usadas no lugar errado, elas confundem.

O critério:

- **Given**: contexto e massa de dados. Aquilo que já é verdade antes de a ação acontecer. Pense no passado.
- **When**: a ação ou o evento que a regra descreve. O presente.
- **Then**: o resultado esperado depois da ação. Um futuro próximo.

Ruim:

```gherkin
Cenário: Editar o nome da empresa
  Dado que estou logado
  Quando existe uma empresa cadastrada
  E visito a página de edição da empresa
  E altero o nome da empresa para "Nova Ltda"
  Então vejo o nome "Nova Ltda" na lista de empresas
```

Existir uma empresa cadastrada e estar na página de edição são pré-condições. Não são ações que o cenário quer testar. A ação central é alterar o nome, e ela é a única que merece o `Quando`.

Melhor:

```gherkin
Cenário: Editar o nome da empresa
  Dado que estou logado
  E que existe uma empresa cadastrada
  E que estou na página de edição da empresa
  Quando altero o nome da empresa para "Nova Ltda"
  Então vejo o nome "Nova Ltda" na lista de empresas
```

Um teste rápido: o `Quando` deve ser fácil de resumir em uma frase, e existir um único por cenário, na maioria dos casos. Se você tem três `Quando` seguidos, provavelmente dois deles são contexto.

## Revisando um cenário na prática

Ao revisar um cenário seu (ou de outra pessoa), faça as perguntas na ordem em que os anti-padrões aparecem:

1. O texto fala de botão, campo ou clique? Suba o nível de abstração.
2. Existe mais de uma regra de negócio sendo verificada? Separe.
3. Só pelo nome dá para saber o que o cenário simula?
4. Cada passo contribui para entender a regra? Tire os que só descrevem o "como".
5. O `Dado` traz contexto, o `Quando` a ação, o `Então` o resultado?

Se a resposta a alguma delas for "não", você achou a próxima edição.

## Referências

- [Como escrever cenários melhores conhecendo anti-padrões de Cucumber](https://medium.com/danielle-moreira/como-escrever-cen%C3%A1rios-melhores-conhecendo-anti-padr%C3%B5es-de-cucumber-c8a0ade830b7) - Danielle Moreira, pt-BR
- [Better Gherkin](https://cucumber.io/docs/bdd/better-gherkin/) - Cucumber, en
- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/) - Cucumber, en
