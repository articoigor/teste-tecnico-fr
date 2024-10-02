# 🚚 Teste Técnico - Frete Rápido

Teste técnico para vaga na empresa **Frete Rápido**. A aplicação simula fretamentos e exibe métricas desses fretamentos de acordo com empresa responsável, preço total por orçamento de frete e demais dados.

## ✨ Funcionalidades

- **POST /frete**: Simula um fretamento, fornecendo informações sobre o frete de acordo com os dados da remessa fornecidos. Os resultados são armazenados em uma instância gratuita do Supabase

- **GET /metrics?last_quotes**: Exibe métricas de fretamentos realizados, processando os dados já armazenados no banco de dados. O parâmetro last_quotes limita a quantidade de registros recuperados antes de realizar o processamento e geração das métricas.

## 📋 Pré-requisitos

Certifique-se de ter instalado na sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Como Executar

Siga os passos abaixo para rodar a aplicação com Docker:

1. Clone este repositório:

   ```bash
   git clone https://github.com/articoigor/teste-tecnico-fr.git

2. Passe para o diretório do projeto:

    ```bash
    cd teste-tecnico-fr

3. Adicione o arquivo .env neste diretório.

4. Execute o comando de Docker Compose:
  docker-compose up

5. Pronto, a aplicação já estará rodando !

## OBSERVAÇÕES: 
- Caso queira rodar sem Docker, basta seguir até o passo 3 acima e então executar npm i seguido de npm run start manualmente