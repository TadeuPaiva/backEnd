
# INTRODUCAO AO BANCO DE DADOS

DEPENDENCIES:
- bcryptjs: "^2.4.3",
- express: "^4.18.2",
- express-async-errors: "^3.1.1",
- knex: "^3.1.0",
- sqlite: "^5.1.1",
- sqlite3: "^5.1.6",
- nodemon: "^3.0.3"



## Instalação

Instale my-project com npm

```bash
npm i bcryptjs
npm install express --save
npm i express-async-errors
npm install knex --save
npm install 'sqlite/sqlite3' --save
npm i nodemon
```
    
## Uso/Exemplos

No package.json adicionamos o script para auxiliar a inicializacao do servidor e atualizar automaticamente sempre que salvarmos as alteracoes com o 'nodemon'

```Iniciando o servidor
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"
```

``` Criando o arquivo DB
"migrate": "knex migrate:latest"
```

Com o auxilio do 'knex' para criar as tabelas de forma mais automatica

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...

Projeto em desenvolvimento, breve atualizacao do front-end. Acompanhe pelo meu github

https://github.com/TadeuPaiva


#### Entre em contato:

- tadeupaiva111@hotmail.com

- https://www.linkedin.com/in/tadeu-paiva-b26209270/