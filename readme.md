# Testing en js

## ¿Qué es el test?

## ¿Qué es una aserción?

Es un pedazo de código que compara el `resultado` vs `esperado`
El resultado de la operación es igual a lo esperado.
Una asersión verifica si el resultado es igual a lo esperado(expectation)

## Test Runners

- Primero inicializamos nuestro entorno con 

```bash
- npm init -y
- touch .gitignore (crear el archivo gitignore)
- node_modules/ (en el archivo gitignore)
- npm i --save-dev mocha
- En el package.json configuramos la propiedad scripts para que sea con mocha y el archivo index.spec.js
```