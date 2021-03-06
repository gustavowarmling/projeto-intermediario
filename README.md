# Projeto intermediário

Aplicação desenvolvida para o projeto intermediário da disciplina de programação web.

# URL para teste
- https://projeto-intermediario-gustavo.herokuapp.com/

# Tecnologias utilizadas
  - Node.JS
  - Express.js
  - axios
  - node-html-parser
  - eslint,
  - prettier

# Como utilizar?

  - Instale as dependências
    ```sh
    yarn
    ```
    Inicie a aplicação
    ```sh
    yarn start
    ```
  - Utilize as rotas no navegador e/ou Insomnia
    ```sh
    /popular-reviews
    /100-artists
    ```

# Rotas!

**GET** /popular-reviews
  - Retorna uma lista de criticas populares do site https://letterboxd.com
  - Query: film
  - ```sh
    {
      author: string;
      film: string;
      review: string;
      timestamp: Date;
    }
    ```

**GET** /100-artists
  - Retorna a lista dos 100 artistas mais populares do momento segundo o site https://www.billboard.com/charts/artist-100
  - Query: artist
  - ```sh
    {
      artist: string;
      rank: string;
      PeakPosition: string;
      timestamp: Date;
    }
    ```
