// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let symbol = '*';
let imprimir = '';

for (let index = 0; index < n; index ++) {
  imprimir = imprimir + symbol;
};

for (index = 0; index < n; index ++) {
  console.log(imprimir);
};