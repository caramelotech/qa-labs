# 02 - Testes em Diferentes Contextos

## Ciclos de Vida de Desenvolvimento no Contexto Ágil e Tradicional

Para que uma aplicação seja desenvolvida, ela passa por um processo composto por atividades. Há dois modelos de processos bastante populares: o **Tradicional** e o **Ágil**.

## Modelo Tradicional

### Características

- O processo é faseado e de escopo fechado (fase de planejamento, fase de design, fase de desenvolvimento etc., cada fase com um time diferente)
- O foco é no cumprimento da atividade primária: produzir artefatos e testar aplicações baseando-se nas documentações e requisitos fornecidos por fases anteriores
- O software só chega ao usuário final ao final de todo o processo de desenvolvimento

### Processo de Testes no Modelo Tradicional

| Fase             | Atividades                                                                                           | Artefatos                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Documentação** | Revisar documentação                                                                                 | Plano de teste e caso de teste                                            |
| **Codificação**  | Revisar código fonte                                                                                 | Testes de unidade e testes de integração                                  |
| **Testes**       | Executar os casos de testes já criados, automatizar testes e gerir inconsistências e retestá-las     | Log de testes, reporte de inconsistências e scripts de teste automatizado |
| **Homologação**  | Auxiliar os usuários nos testes de aceitação                                                         | Reporte de inconsistências                                                |
| **Entrega**      | Versionar o testware, emitir relatórios de fechamento dos testes e monitorar a aplicação em produção | Reporte de inconsistências e relatório de resumo dos testes               |

## Modelo Ágil

### Características

- Um único time trabalhando junto para desenvolver o software como um todo
- Entrega contínua com base em funcionalidades
- Mudanças podem ocorrer ao longo do processo
- O QA não é o guardião da qualidade - as responsabilidades de teste são compartilhadas com o time de desenvolvimento. Todos precisam automatizar testes; o QA cria e ajuda o time a codificá-los

### Processo de Testes no Modelo Ágil

| Fase                     | Atividades                                                                                                                                                         | Artefatos                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Desenho**              | Discussões quanto à viabilidade, revisão de artefatos e levantamento de riscos                                                                                     | Mapas mentais                                                                              |
| **Refinamento**          | Colaboração na definição de critérios de aceitação, revisão de artefatos, estimativas de esforço em teste, levantamento de riscos e atualização do plano de testes | Mapas mentais                                                                              |
| **Planejamento**         | Estimativas de esforço em testes                                                                                                                                   | Tarefas de teste                                                                           |
| **Codificação e Testes** | Executar tarefas de teste, executar testes exploratórios, automatizar testes, dar suporte aos desenvolvedores na escrita e gerir inconsistências e retestando      | Reporte de inconsistências e scripts de teste automatizado, testes de unidade e integração |
| **Entrega**              | Colaborar para qualidade dos processos de entrega, monitorar a aplicação em produção e monitorar execução dos scripts de teste automatizados                       | Reporte de inconsistências                                                                 |

---

> _Os textos desse arquivo foram baseados no Treinamento em Teste de Software do Júlio de Lima._
