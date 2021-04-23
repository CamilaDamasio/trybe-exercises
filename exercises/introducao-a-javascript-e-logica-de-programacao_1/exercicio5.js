let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulosSaoPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosSaoPositivos) {
    if (somaDosAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
};
} else {
    console.log('Erro');
}