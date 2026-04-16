---
title: "Mapa Estudo de Teste de Software"
description: "Este guia organiza os principais conceitos e práticas modernas de qualidade de software, alinhado com o cenário atual de desenvolvimento (CI/CD, microsserviços, automação e observabilidade)."
lastUpdated: 2026-04-15
sidebar:
  order: 100
tags: ["qa", "roadmap"]
---

Este guia organiza os principais conceitos e práticas modernas de qualidade de software, alinhado com o cenário atual de desenvolvimento (CI/CD, microsserviços, automação e observabilidade).

## 🧩 1. Fundamentos de Qualidade de Software

- Conceito de qualidade de software (valor + confiabilidade)
- Objetivo do teste de software
- Validação vs Verificação
- Pirâmide de Testes
- Tipos de testes:
  - Unitários
  - Integração
  - End-to-End (E2E)
  - Testes de contrato
- Testes de Caixa Preta vs Caixa Branca
- Testes funcionais vs não-funcionais

## 🏗️ 2. Estratégia de Testes

- Estratégia de testes (Test Strategy)
- Plano de testes (quando necessário)
- Critérios de aceitação
- Definition of Done (DoD)
- Testes baseados em risco (Risk-Based Testing)
- Testes exploratórios

## ⚙️ 3. Testes Automatizados

### Backend

- Testes unitários
- Mocks, Stubs e Fakes
- Testes de integração (APIs, banco de dados)
- Testes de contrato (consumer-driven)

### Frontend / UI

- Testes End-to-End (E2E)
- Boas práticas de automação
- Evitando testes frágeis (flaky tests)

## 🔁 4. CI/CD e Qualidade Contínua

- Integração Contínua (CI)
- Entrega Contínua (CD)
- Pipelines de testes
- Quality Gates
- Testes em Pull Requests
- Estratégias:
  - Shift Left
  - Shift Right

## 🧪 5. BDD, TDD e ATDD

- Behavior Driven Development (BDD)
- Test Driven Development (TDD)
- Acceptance Test Driven Development (ATDD)

### Práticas

- Escrita de cenários com Gherkin:
  - GIVEN / WHEN / THEN
- Escrita colaborativa (produto + dev + QA)
- Features e cenários
- Exemplos e fluxos alternativos

## 🌐 6. Testes em Arquiteturas Modernas

- Microsserviços
- Sistemas distribuídos
- Testes de contrato entre serviços
- Testes com mensageria (eventos e filas)
- Testes de resiliência:
  - Timeout
  - Retry
  - Circuit breaker

## 📊 7. Observabilidade e Testes em Produção

- Logs estruturados
- Métricas e monitoramento
- Tracing distribuído
- Testes em produção:
  - Feature flags
  - Canary releases
  - Shadow traffic

## 🚀 8. Performance e Confiabilidade

- Testes de carga (Load Testing)
- Stress Testing
- Testes de desempenho
- Latência e throughput

## 🔍 9. Automação de Testes UI

- Conceitos de automação com Selenium
- Ferramentas modernas:
  - Playwright
  - Cypress
- Page Object Pattern (com moderação)
- Boas práticas para estabilidade dos testes

## 🐞 10. Gestão de Bugs e Qualidade

- Ciclo de vida de bugs
- Severidade vs Prioridade
- Boas práticas de reporte
- Métricas de qualidade:
  - Defect leakage
  - Cobertura de testes (com cautela)

## ⚡ 11. Testes em Metodologias Ágeis

- Testes em Scrum
- Eventos ágeis:
  - Sprint Planning
  - Daily
  - Review
  - Retrospective
- Testes dentro da sprint
- Colaboração entre times
- Papel do Quality Engineer

## 🧰 12. Ferramentas e Ecossistema

### Testes

- Frameworks de teste (ex: JUnit)
- Ferramentas BDD (ex: Cucumber)
- Testes de API
- Ferramentas E2E (Playwright, Cypress)

### DevOps

- Pipelines (GitHub Actions, GitLab CI)
- Docker para ambientes de teste
- Versionamento de testes
