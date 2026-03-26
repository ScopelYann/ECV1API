# 🌿 Plant Identifier API

API back-end responsável por processar imagens enviadas pelo cliente, identificar plantas com apoio de serviços externos e enriquecer os dados com automação e IA para alimentar a interface de um aplicativo identificador de plantas.

---

## 📌 Visão geral

O objetivo desta API é receber uma imagem de planta enviada pelo cliente, processá-la, consultar uma API externa de identificação botânica, enriquecer as informações com apoio de automação via **n8n** e retornar ao front-end uma resposta organizada, consistente e útil para exibição ao usuário final.

Inicialmente, como a interface do aplicativo ainda não está pronta, os testes da API podem ser realizados via **HTTPie** utilizando requisições `multipart/form-data`.

---

## 🎯 Objetivo do sistema

O sistema foi projetado para funcionar como a camada principal de processamento do aplicativo de identificação de plantas.

### Responsabilidades:

- Receber a imagem da planta enviada pelo cliente  
- Encaminhar a imagem para uma API externa (Plant.id)  
- Obter dados iniciais como nome e características  
- Enviar os dados para um fluxo automatizado no n8n  
- Utilizar IA para enriquecer as informações  
- Tratar e padronizar a resposta  
- Retornar dados consistentes para o front-end  

---

## 🚀 Tecnologias utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **Multer**
- **PostgreSQL**
- **n8n**
- **Plant.id API**
- **APIs externas**
- **IA (Agente via n8n)**

---

## 🧠 Arquitetura da solução

A arquitetura segue um fluxo de processamento em etapas:

### Componentes principais

#### 1. Cliente
Responsável por enviar a imagem (atualmente via HTTPie).

#### 2. Back-end API
- Recebe imagem
- Valida dados
- Integra com Plant.id
- Integra com n8n
- Trata resposta
- Retorna ao cliente

#### 3. Plant.id
API responsável pela identificação inicial da planta.

#### 4. n8n
Responsável por automação e enriquecimento com IA.

#### 5. PostgreSQL
Persistência de dados e histórico.

---

## 🔄 Fluxo de funcionamento

```text
Cliente
   ↓
API (Express + Multer)
   ↓
Validação
   ↓
Plant.id API
   ↓
Resposta inicial
   ↓
n8n (IA)
   ↓
Back-end
   ↓
Resposta final
