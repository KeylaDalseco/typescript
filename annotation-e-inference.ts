let preco:number = 300;
console.log(preco);

// Quando for utilizado esse tipo de annotation, deve-se passar o ; na tipagem.
const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5
};

// Mas por conta da Inference, não precisamos colocar pois podemos identificar diretamente.

const barato: boolean | string = preco < 400 ? true : "produto caro";

function somar (a: number, b: number) {
  return a + b;
}


// EXERCÍCIOS

function normalizarTexto(texto: string) {
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



