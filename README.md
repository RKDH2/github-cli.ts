# github-cli.ts
![License](https://img.shields.io/badge/License-MIT-blue.svg?color=green) ![npm](https://img.shields.io/npm/v/github-cli.ts?color=orange)

Github 레포지토리 및 사용자 정보를 빠르게 확인할 수 있는 CLI 라이브러리 입니다.

## 설치 방법 (npm, yarn, pnpm)
```
npm install github-cli.ts
yarn add github-cli.ts
pnpm add github-cli.ts
```

## 사용방법
```
Usage: github [options] [command]
```
```
Options:
  -v                         --version
  -h, --help                 display help for command
  --json                     JSON 형식으로 출력
```
```
Commands:
  repo [options] <repo>      Github 레포지토리 정보를 가져옵니다.
  user [options] <username>  Github 사용자 정보를 가져옵니다.
  help [command]             display help for command
```
