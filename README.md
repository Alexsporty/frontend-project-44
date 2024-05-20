### Hexlet tests and linter status:

[![Actions Status](https://github.com/Alexsporty/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Alexsporty/frontend-project-44/actions)
Linter version (npm install --save-dev eslint@8.57.0 @eslint/create-config@1.0.0),
npx eslint --init
npx eslint .
Так же нужно создать самому файл, .eslintrc.yml и добавить в него правила!
env:
  node: true
  es2021: true
extends: airbnb-base
parserOptions:
  ecmaVersion: latest
  sourceType: module
rules:
  no-console: 0
  import/extensions: # FIXME: remove when rule will be adjusted for new nodejs version
    - error
    - ignorePackages
    - js: always
  no-underscore-dangle: [2, { "allow": ["__filename", "__dirname"] }]

  Консольное приложение из 5 игр с математическими задачами, компьютер рандомно задаёт вопрос, пользователь отвечает!
  В случае неправильного ответа, игра закончена!



https://asciinema.org/a/659153 Even
https://asciinema.org/a/659540 Calculator
https://asciinema.org/a/659559 Gcd
https://asciinema.org/a/659577 Progression
https://asciinema.org/a/659867 Prime
