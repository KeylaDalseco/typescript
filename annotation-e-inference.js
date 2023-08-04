"use strict";
let preco = 300;
console.log(preco);
// Quando for utilizado esse tipo de annotation, deve-se passar o ; na tipagem.
const carro = {
    marca: "Audi",
    portas: 5
};
// Mas por conta da Inference, não precisamos colocar pois podemos identificar diretamente.
const barato = preco < 400 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
// EXERCÍCIOS
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("Opa "));
// TIPOS PRIMITIVOS ============
const frase1 = 'Front End';
const preco2 = 500;
const condi = preco > 100;
console.log(typeof []); // será um objeto tbm o array
if (typeof frase1 === 'string') {
    console.log('frase é string');
}
if (typeof preco2 === 'number') {
    console.log('preco é number');
}
if (typeof condi === 'boolean') {
    console.log('condi é boolean');
}
