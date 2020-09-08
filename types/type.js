"use strict";
// Tuplas
let endereco = ['Av Principal', 99];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 100] = "Laranja";
    Cor[Cor["Vermelho"] = 101] = "Vermelho"; //101
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// tipo função
function multiplicar(numA, numB) {
    return numA * numB;
}
let calculo;
calculo = multiplicar;
console.log(calculo(4, 5));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
// exercicio tipos
const funcionario = {
    supervisores: ['João', 'Mauricio'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
const funcionario2 = {
    supervisores: ['Teste', 'Testee2'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
// UNION TYPES
// caso em que eu queira permitir apenas número e string, por exemplo
let nota = 10;
nota = '9';
// tipo NEVER -> explicitar quando vai acabar com erro ou vai ficar em algum tipo de looping
function falha(msg) {
    // while(true) {}
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido');
        }
    }
};
produto.validarProduto();
let contaBancaria = {
    saldo: 100,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['123455454', '3243242342']
};
correntista.contaBancaria.depositar(100);
console.log(correntista);
//# sourceMappingURL=type.js.map