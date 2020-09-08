"use strict";
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = "Pessoa") => {
    console.log(`Ola, ${nome}`);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
console.log([...array, ...nums]);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//Promise
function espera3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois....');
        }, 3000);
    });
}
//espera3sPromise().then(dado => console.log(dado))
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilm => respFilm.json())
    .then(filme => console.log(filme.title));
//# sourceMappingURL=ecmascript.js.map