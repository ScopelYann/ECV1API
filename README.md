# 🌿 Eco Viewer — Back-end

Back-end da aplicação **EcoViewer**, uma biblioteca digital de plantas que fornece informações botânicas detalhadas ao front-end, consumindo e tratando dados da API externa [Perenual](https://perenual.com/).

---

## 📋 Sobre o Projeto

O servidor é responsável por intermediar a comunicação entre o front-end e a API Perenual. Ele recebe as requisições, consulta a API externa, processa o retorno e devolve um JSON limpo e estruturado com as informações relevantes de cada planta — nome comum, nome científico, família botânica, imagens e categoria e muitas outras coisas.

A filtragem por categorias (ex: plantas venenosas, rosas, etc.) é tratada no front end, que mapeia os parâmetros recebidos do back end para os filtros correspondentes da API Perenual, retornando apenas os itens da categoria solicitada.

O banco de dados **PostgreSQL** é utilizado para persistência local de dados, reduzindo chamadas desnecessárias à API externa.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **Node.js** | Ambiente de execução do servidor |
| **Express** | Framework para criação das rotas e middlewares |
| **TypeScript** | Superset do JavaScript com tipagem estática, tornando o código mais seguro e legível |
| **PostgreSQL** | Banco de dados relacional para persistência de dados |
| **Perenual API** | API externa que fornece os dados das plantas (nome, família, imagens, etc.) |

---

## 🗂️ Estrutura de Pastas

O projeto segue o padrão arquitetural **MVC (Model - View - Controller)**, separando as responsabilidades em camadas bem definidas:
