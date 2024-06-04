# Local

## To Run Project:

### Windows (cmd.exe)

```bash
set "TOKEN=<your_token>" && npm run start
```

### Windows (Powershell)

```bash
($env:TOKEN = "<your_token>") -and (npm run start)
```

### Linux, macOS (Bash)

```bash
TOKEN=<your_token> npm run start
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
set "TOKEN=<your_token>" && docker-compose up --build
```

### Windows (Powershell)

```bash
($env:TOKEN = "<your_token>") -and (docker-compose up --build)
```

### Linux, macOS (Bash)

```bash
TOKEN=<your_token> docker-compose up --build
```
