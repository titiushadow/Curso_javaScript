// Escrevendo uma variavel do tipo string.
var nome = 'Mesaque';
console.log(nome);
console.log(typeof nome);


// Para juntar dois valores usamos o sinal de + igual o exemplo abaixo.
var nome = 'Mesaque'
var sobrenome = 'Moisés'
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var frase = 'Esta é uma frase complexa';
console.log(frase);
console.log(typeof frase);


// Também posso concatenar dois variaveis distintas com aspas simples ou aspas duplas. 
console.log(nome + ' ' + frase);


// Para escrever uma frase para o usuario usamos o document.write
document.write("Olá, tudo bem?")

document.write('Ele disse: "Olá"');

document.write("Ele disse: 'Olá'");


// Podemos tambem concatenar strings e numbers.
console.log("Este numero: " + "432");


// Também podemos concatenar strings e variaveis
console.log("O seu nome é: " + nome);
