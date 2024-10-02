# 🚚 Teste Técnico - Frete Rápido

Teste técnico para vaga na empresa **Frete Rápido**. A aplicação simula fretamentos e exibe métricas desses fretamentos de acordo com empresa responsável, preço total por orçamento de frete e demais dados.

## ✨ Funcionalidades

- **POST /frete**: Simula um fretamento, fornecendo informações sobre o frete de acordo com os dados da remessa fornecidos. Os resultados são armazenados em uma instância gratuita do Supabase

- **GET /metrics**: Exibe métricas de fretamentos realizados, processando os dados já armazenados no banco de dados.

## 📋 Pré-requisitos

Certifique-se de ter instalado na sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Como Executar

Siga os passos abaixo para rodar a aplicação com Docker:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/teste-tecnico-fr.git

2. Passe para o diretório do projeto:
  cd teste-tecnico-fr

3. Adicione o arquivo .env neste diretório.

4. Execute o comando de Docker Compose:
  docker-compose up

5. Pronto, a aplicação já estará rodando !

OBS: Caso queira rodar sem Docker, basta seguir até o passo 3 acima e então executar npm i seguido de npm run start manualmente.