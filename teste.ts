// TYPES ====================================

// => Um arquivo TS só pode ser compilado, de houver um html, quando instalar o typescript e mudar o nome do arquivo para .ts e criar o arquivo compilador em js(tsc --init).

// => Geralmene nos mexemos no arquivo do typescript, pois será compilado no js automaticamente, usando a flag -w.

// passará a indicar erros pegos pelo TS
//@ts-check

const frase = 'Front End';
const total = 100.05;

frase.toLowerCase();

// AQUI SERIA GERADO UM ERRO, POIS NÃO PODEMOS POR EM LOWER CASE UM DADO NUMÉRICO, OU VICE E VERSA.
// frase.toFixed();
// total.toLowerCase();
const t = total.toFixed(); // Nesse caso, quando faz a conversão ele vira string. SE tentar somar ele concatena.
console.log(t + 10);


// TYPE ANNOTATION / ANOTAÇÕES DE TIPO ==============

const produtos = [
  {
    nome: 'O Senhor dos Anéis',
    tipo: 'livro',
  },
  {
    nome: 'A Guerra dos Tronos',
    tipo: 'livro',
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo',
  },
];

// Podemos adicionar o tipo de anotação de dado nos parametros de funções.
function filtrarLivros(dados: { nome: string, tipo: string }[]) {
  return dados.filter((item) => item.tipo === 'livro');
}
console.log(filtrarLivros(produtos));


// INFERENCE ========================
// => tipo de um dado que o js já consegue saber o que é, ou já sabe o que será retornado no caso.
// Depois do parametro não precisamos adicionar dois pontos e indicar o tipo de retorno, pois so de passar o mouse na função, ela já mostra que será um number.
const soma = (a: number, b: number): number => {
  return a + b;
};


// FUNÇÕES COM ANNOTATION E INFERENCE ========
//se vc tentar passar o parametro sem um dos itens do objeto, o compilador retorna o erro, pois no arquivo de configuração do json e obrigatorio - strict: true.

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

const transformaPreco = (produto: { nome: string, preco: string}) => {
  produto.preco = `R$ ${produto.preco}`
  return produto;
};

console.log(transformaPreco(nintendo));
