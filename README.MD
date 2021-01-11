<h1 align="center">
    <img alt="Gdm" title="Gdm" src="https://github.com/caiquedevs/GDM/blob/main/github/logo.svg" width="220px" />
</h1>

<p align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<br>

<p align="center">
  <img alt="Gdm" src="https://github.com/caiquedevs/GDM/blob/main/github/template.svg" width="100%">
  <img src="https://github.com/caiquedevs/GDM/blob/main/github/demo.gif" width="100%" />
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=GDM%20collection&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcaiquedevs%2FGDM%2Fmain%2Fserver%2FInsomnia_2021-01-11.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🚀 Tecnologias

Esse projeto esta sendo desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
  - Express
  - Mysql
  - sequelize
  - Sqlite3
  - Eslint
  - Prettier
  - Cors
  - Typescript
- [React](https://reactjs.org)
  - Axios
  - Styled Components
  - Typescript
  - React-icons
  - Eslint
  - Prettier
  - Material UI

## 💻 Projeto

O GDM é um sistema web e para gerenciar cadastros de médicos onde o usuário pode Realizar cadastros, editar e exclui-los.

## :information_source: Como usar

Para clonar e executar este aplicativo, você precisará [Git] (https://git-scm.com), [Node.js] [nodejs] + [Yarn] [yarn] instalado no seu computador.

Na sua linha de comando:

### Configurar Banco de dados

```bash
# Clonar este repositório
$ git clone https://github.com/caiquedevs/GDM.git

# Entre no repositório
$ cd GDM/server/src/config

# abrir o aqruivo Database.json
# Inserir sua config do banco de dados
$ development: {
    username: "root",
    password: "",
    database: "",
    host: "127.0.0.1",
    dialect: "mysql"
  },
```

### Instalar API

```bash
# Entre no repositório
$ cd GDM/server

# Instalar dependências
$ yarn install
ou
$ npm install

# Executar migrações
$ npx sequelize db:migrate

# Executar Seeds
$ npx sequelize db:seeds:all

# Iniciar servidor
$ yarn dev
ou
$ npm run dev

# Em execução na porta 3333
```

### Instalar Front-end

```bash
# Entre no repositório
$ cd GDM/web

# Instalar dependências
$ yarn install
ou
$ npm install

# Iniciar
$ yarn start
ou
$ npm run start

# executando na porta 3000
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ por Caiquedevs
