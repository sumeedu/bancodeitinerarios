<!--suppress HtmlDeprecatedAttribute -->
<h1 align="center">Banco de Itinerários</h1>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/sumesolutions/bancodeitinerarios">
  <a href="https://discord.gg/Yh9q9cd">
    <img alt="Discord" src="https://img.shields.io/discord/726500188021063682">
  </a>
</p>

## Sobre o Projeto

O **Banco de Itinerários** é um projeto de **código aberto**, que tem como principal objetivo oferecer uma ferramenta colaborativa para auxiliar instituições de ensino, secretarias educacionais e educadores da rede pública e privada por meio do intercâmbio de itinerários formativos e materiais educacionais.

### Quem faz?

O **Banco de Itinerários** é desenvolvido de forma colaborativa. As contribuições são realizadas das mais diversas formas, por profissionais dos mais diversos backgrounds. Sendo que o projeto é idealizado e coordenado pela iniciativa [Sumé Edu](https://github.com/sumeedu), parte da [Sumé Solutions](https://github.com/sumesolutions).

## Índice

-   [Pré-requisitos](#pré-requisitos)
-   [Preparar](#preparar)
-   [Running](#running)
-   [Testes](#testes)
-   [Contribuições](#como-fazer-contribuições)
-   [Código de conduta](#codigo-de-conduta)
-   [Contribuidores](#contribuidores)
-   [Suporte](#suporte)
-   [Licença de uso](#licença-de-uso)

## Pré-requisitos

-   PHP >= 8.0
-   MariaDB >= 10
-   NodeJS >= 18.4
-   Yarn >= 1.22 or NPM >= 8.12
-   Composer >= 2.4

## Preparar

1. Clone o repositório:

```bash
$ git clone git@github.com:sumesolutions/bancodeitinerarios.git
```

2. Abra o pasta do projeto no terminal:

```bash
$ cd bancodeitinerarios
```

3. Faça o dowload das dependencias, utilizando o sequinte comando:

```bash
$ yarn install
$ composer install
```

_Pode demorar um pouco para baixar todas as dependências, então você está [pronto para rodar](#rodar)_

## Rodar projeto

_OK! Agora que você o constrói, você precisa executar o projeto. Isso também deve ser muito fácil._

1. Você precisa configurar sua aplicação:

```bash
$ cp .env.example .env
$ php artisan key:generate
```

> Edite o arquivo `.env` e configure sua conexão com o banco de dados.

@TODO: Adicionar mais informações sobre banco de dados.

2. Rode a migração usando:

```bash
$ php artisan migrate
```

> Você pode adicionar `--seed` ao final do comando migrate para semear o banco de dados com alguns dados falsos.

3. (Em um novo terminal) Inicie o frontend:

```bash
$ yarn dev
```

4. (Em um novo terminal) Rode o backend:

```bash
$ php artisan serve
```

## Testes

Todos os testes serão executados com um único comando:

### Frontend

```bash
$ yarn test
```

### Backend

```bash
$ php artisan test
```

## Como fazer contribuições?

Obrigado por considerar contribuir para o projeto!

Para garantir que a comunidade Sumé seja bem-vinda a
todos certifiquem-se de ler nossas [Diretrizes do Contribuidor](CONTRIBUTING.md).

## Código de conduta

Você gostaria de contribuir e participar de nossas comunidades?
Leia nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## Contrubuidores

<a href="https://github.com/sumesolutions/bancodeitinerarios/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sumesolutions/bancodeitinerarios" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Suporte

### Comunidade

Você pode entrar em contato conosco ou obter suporte da comunidade em nosso [servidor Discord](https://discord.gg/Yh9q9cd).

_Esta é a melhor maneira de encontrar ajuda!_

### Bugs e solicitação de recursos

Se você encontrou um bug ou tem uma solicitação de recurso, a melhor maneira de fazer isso é [opening a issue](https://github.com/sumesolutions/bancodeitinerarios/issues).

## Licença

Este projeto licenciado pela Apache License 2.0. Para mais informações consulte o arquivo LICENSE.

---

with ❤ - [SumeEduTeam](https://github.com/sumeedu)
