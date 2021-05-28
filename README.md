# Projeto intermediário

Aplicação desenvolvida para o projeto intermediário da disciplina de programação web.

# Tecnologias utilizadas
  - Node.JS
  - Express.js
  - axios
  - node-html-parser
  - nodemon
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
    /best-movies
    /popular-reviews
    ```

# Rotas!

**GET** /popular-reviews
  - Retorna uma lista de criticas populares do site https://letterboxd.com
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
  - ```sh
    {
      artist: string;
      rank: string;
      PeakPosition: string;
      timestamp: Date;
    }
    ```
