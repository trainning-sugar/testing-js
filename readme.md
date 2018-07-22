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

## Craando mi propip test runner y mi libreria de asserciones

EL objeto `assert` es nuestra propia y básica libreria de aserciones.

Y la función `test` es nuestro propio test runner, piensa en ella como `la función it de mocha`;

[JavaScript Test-Runners Benchmark - Part 1](https://medium.com/dailyjs/javascript-test-runners-benchmark-3a78d4117b4)

[An Overview of JavaScript Testing in 2018](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)