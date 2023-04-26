# AI Test Helper

> Help you create unit test by AI

## Language Support

- [ ] Javascript
- [ ] Golang

## Framework Support

- [ ] Jest
- [ ] go test

## Features

- [x] Create Unit Test
  - [x] Create Unit Test For File
  - [x] Create Unit For Symbol
  - [ ] Chunk Large File
- [ ] Fix Existed Unit Test
- [ ] Improve Code Coverage
- [ ] Multi Selection
- [ ] Token Calculation
- [ ] AST Parser

## Internal

### How to build ast parser

```bash
antlr4 -Dlanguage=TypeScript GoLexer.g4 GoParser.g4
```

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)