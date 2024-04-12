# Local

## To Run Project:

### Windows (cmd.exe)

```bash
set "TOKEN_KEY=<your_token_key>" && npm run start
```

### Windows (Powershell)

```bash
($env:TOKEN_KEY = "<your_token_key>") -and (npm run start)
```

### Linux, macOS (Bash)

```bash
TOKEN_KEY=<your_token_key> npm run start
```

## To Run Tests:

```bash
npm run test
```

## To Run Build:

```bash
npm run build
```

## To Run Lint:

```bash
npm run lint
```

## To Run Format:

```bash
npm run format
```

# Docker

## To Build:

### Windows (cmd.exe)

```bash
set "TOKEN_KEY=<your_token_key>" && docker-compose up --build
```

### Windows (Powershell)

```bash
($env:TOKEN_KEY = "<your_token_key>") -and (docker-compose up --build)
```

### Linux, macOS (Bash)

```bash
TOKEN_KEY=<your_token_key> docker-compose up --build
```

# FAQ

1. Пункт **"Если при переходе со страницы на страницу, запросы, относящиеся к старой странице, прерываются (отменяются/прекращаются)":** Для запросов я использовал RTK Query, и мне кажется, что в данном случае Abort особо не имеет смысл, т.к. данные кэшируются. Реализовал Abort только на [странице поиска случайного фильма.](https://github.com/snj2k1/kinopoisk/blob/main/src/pages/RandomPage/ui/index.tsx)
