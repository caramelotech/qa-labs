---
title: "Testes em Diferentes Contextos"
description: "Compare o papel de QA nos modelos tradicional e agil para entender como qualidade muda ao longo do ciclo de desenvolvimento."
lastUpdated: 2026-04-13
sidebar:
  order: 3
tags: ["qa", "agil", "tradicional", "processos"]
---

## Ciclos de vida de desenvolvimento no contexto agil e tradicional

Para que uma aplicacao seja desenvolvida, ela passa por um processo composto por atividades. Ha dois modelos bastante populares: o **tradicional** e o **agil**.

## Modelo tradicional

### Caracteristicas

- O processo e faseado e de escopo fechado
- O foco e no cumprimento da atividade primaria de cada fase
- O software so chega ao usuario final ao fim de todo o processo

### Processo de testes no modelo tradicional

| Fase             | Atividades                                                                    | Artefatos                                                         |
| ---------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Documentacao** | Revisar documentacao                                                          | Plano de teste e caso de teste                                    |
| **Codificacao**  | Revisar codigo fonte                                                          | Testes de unidade e testes de integracao                          |
| **Testes**       | Executar casos de teste, automatizar testes, gerir inconsistencias e retestar | Log de testes, reporte de inconsistencias e scripts automatizados |
| **Homologacao**  | Auxiliar usuarios nos testes de aceitacao                                     | Reporte de inconsistencias                                        |
| **Entrega**      | Versionar o testware, emitir relatorios e monitorar a aplicacao em producao   | Reporte de inconsistencias e relatorio de resumo dos testes       |

## Modelo agil

### Caracteristicas

- Um unico time trabalha junto para desenvolver o software
- Ha entrega continua com base em funcionalidades
- Mudancas podem ocorrer ao longo do processo
- A qualidade e responsabilidade compartilhada, e nao exclusiva de QA

### Processo de testes no modelo agil

| Fase                     | Atividades                                                                                                               | Artefatos                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Desenho**              | Discutir viabilidade, revisar artefatos e levantar riscos                                                                | Mapas mentais                                                                      |
| **Refinamento**          | Definir criterios de aceitacao, revisar artefatos, estimar esforco em teste, levantar riscos e atualizar plano de testes | Mapas mentais                                                                      |
| **Planejamento**         | Estimar esforco em testes                                                                                                | Tarefas de teste                                                                   |
| **Codificacao e Testes** | Executar tarefas de teste, testes exploratorios, automatizar testes e apoiar desenvolvedores                             | Reporte de inconsistencias, scripts automatizados e testes de unidade e integracao |
| **Entrega**              | Colaborar para a qualidade do processo de entrega e monitorar a producao                                                 | Reporte de inconsistencias                                                         |

## Resumo

Nos dois modelos, QA contribui para a qualidade, mas a forma de atuar muda bastante:

- No modelo tradicional, a atuacao tende a ser mais tardia e segmentada
- No modelo agil, QA participa mais cedo e distribui a responsabilidade de qualidade com o time

---

> Os textos desta pagina foram baseados no Treinamento em Teste de Software do Julio de Lima.

[Voltar ao indice](/qa-labs/fundamentos/00-indice/)
