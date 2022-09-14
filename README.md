<!--suppress HtmlDeprecatedAttribute -->
<h1 align="center">Banco de Itinerários Formativos</h1>

<p align="center">
  <a href="https://goreportcard.com/report/github.com/sumesolutions/bancodeitinerarios">
    <img alt="goreportcard" src="https://goreportcard.com/badge/github.com/sumesolutions/bancodeitinerarios" />
  </a>
  <a href="https://github.com/sumesolutions/bancodeitinerarios/actions/workflows/main.yaml">
    <img alt="github action" src="https://github.com/sumesolutions/bancodeitinerarios/actions/workflows/main.yaml/badge.svg" />
  </a>
  <a href="https://codecov.io/gh/sumesolutions/bancodeitinerarios" >
    <img alt="codecov" src="https://codecov.io/gh/sumesolutions/bancodeitinerarios/branch/main/graph/badge.svg?token=B78WZL5QDY"/>
    </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/sumesolutions/bancodeitinerarios">
  <a href="https://discord.gg/Yh9q9cd">
    <img alt="Discord" src="https://img.shields.io/discord/726500188021063682">
  </a>
</p>

## About

@TODO

## Table of Contents

- [Prerequisites](#prerequisites)
- [Prepare](#prepare)
- [Running](#running)
- [Testing](#testing)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Contributors](#contributors)
- [Support](#support)
- [License](#license)

## Prerequisites

- PHP >= 8.0
- MariaDB >= 10
- NodeJS >= 18.4
- Yarn >= 1.22 or NPM >= 8.12
- Composer >= 2.4

## Prepare

Clone the repository

```bash
$ git clone git@github.com:sumesolutions/bancodeitinerarios.git
```

Access the project folder, and download the dependencies

```bash
$ yarn install
$ composer install
```

It may take a while to download all the dependencies, then you are [ready to run](#running).

## Running

OK! Now you build it you need to run the project. That should also be pretty easy.

1. You need to configure your application

```bash
$ cp .env.example .env
$ php artisan key:generate
```

Edit the `.env` file and configure your database connection.

2. Run the migrations using 

```bash
$ php artisan migrate
```

> You can add `--seed` to the end of the migrate command to seed the database with some fake data.

3. (new terminal) Start the frontend

```bash
$ yarn dev
```

4. (new terminal) Run the backend

```bash
$ php artisan serve
```

## Testing

You can run all the tests with one single command:

### Frontend testing
```bash
$ yarn test
```

### Backend testing
```bash
$ php artisan test
```

## Contributing

Thank you for considering contributing to the project. In order to ensure that the Sumé community is welcome to
all make sure to read our [Contributor Guideline](CONTRIBUTING.md).

## Code of Conduct

Would you like to contribute and participate in our communities? Please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## Contributors

<a href="https://github.com/sumesolutions/bancodeitinerarios/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sumesolutions/bancodeitinerarios" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Support

### Discussion

You can reach us or get community support in our [Discord server](https://discord.gg/Yh9q9cd). This is the best way to
find help and get in touch with the community.

### Bugs or feature requests

If you found a bug or have a feature request, the best way to do
it is [opening an issue](https://github.com/sumesolutions/bancodeitinerarios/issues).

## License

This project licensed by the Apache License 2.0. For more information check the LICENSE file.
