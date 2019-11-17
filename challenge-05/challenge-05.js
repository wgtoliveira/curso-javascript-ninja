/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [1, 'Bahia', true, false, function() {}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arg) {
  return arg
}
// *[1, 'Bahia', true, false, function() {}]
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray(myArr[1])) // * Bahia

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisArgumentos(arr, indice) {
  return arr[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cincoTipos = [1, 'Olá', false, true, 'Washington']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisArgumentos(cincoTipos, 0)) // * 1
console.log(doisArgumentos(cincoTipos, 1)) // * Olá
console.log(doisArgumentos(cincoTipos, 2)) // * false
console.log(doisArgumentos(cincoTipos, 3)) // * true
console.log(doisArgumentos(cincoTipos, 4)) // * Washington

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook) {
  const allBooks = {
    'Javascript: O Guia': {
      qtdePaginas: 1450,
      autor: 'José da Silva',
      editora: 'Mandacaru',
    },

    'NodeJS: O Guia': {
      qtdePaginas: 1500,
      autor: 'Maria José',
      editora: 'Cajueiro',
    },
    'Html e Css: O Guia': {
      qtdePaginas: 955,
      autor: 'Antônio José',
      editora: 'Rui Barbosa',
    },
  }
  return !nameBook ? allBooks : allBooks[nameBook]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro, Javascript: o Guia, tem ' + book('Javascript: O Guia').qtdePaginas + ' páginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro, Javascript: O Guia é, ' + book('Javascript: O Guia').autor)


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Javascript: O Guia , foi publicado pela editora, ' + book('Javascript: O Guia').editora)

