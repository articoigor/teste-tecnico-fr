# 🚚 Teste Técnico - Frete Rápido

Teste técnico para vaga na empresa **Frete Rápido**. A aplicação simula fretamentos e exibe métricas desses fretamentos de acordo com empresa responsável, preço total por orçamento de frete e demais dados.

## ✨ Funcionalidades

- **POST /quote**: Simula valores de frete por diversas empresas através da API da FreteRápido, utilizando como parâmetros dados referentes a remessa de volumes como dimensões gerais e preço unitário. Os resultados desses fretamentos ( nome da empresa, valor final, etc ) são armazenados em uma instância gratuita do Supabase para serem posteriormente processados através da rota GET. Por fim, para realizar a chamada com sucesso, o body do request deve seguir o seguinte schema:

  ```bash
  {
    "recipient":{
        "address":{
          "zipcode":""
        }
    },
    "volumes":[
        {
          "amount":0,
          "unitary_weight":0,
          "price":0,
          "sku":"",
          "height":0,
          "width":0,
          "length":0
        }
    ]
  }
- **GET /metrics?last_quotes**: Exibe métricas de fretamentos realizados, processando os dados já armazenados no banco de dados. O parâmetro ***last_quotes*** limita a quantidade de registros recuperados antes de realizar o processamento e geração das métricas.

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
3. Adicione o arquivo ***.env*** neste diretório.


4. Execute o comando de Docker Compose:
  
    ```bash
    docker-compose up
5. Pronto, a aplicação já estará rodando !

## OBSERVAÇÃO: 
- Caso queira rodar sem Docker, basta seguir até o passo 3 acima e então executar **npm i** seguido de **npm run start** manualmente