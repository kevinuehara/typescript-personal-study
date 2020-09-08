// Tuplas
let endereco: [string, number] = ['Av Principal', 99]
console.log(endereco)

// Enums
enum Cor {
    Cinza, //0
    Verde, //1
    Azul, //2
    Laranja = 100,
    Vermelho //101
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor)

// tipo função
function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

let calculo: (x: number, y: number) => number;
calculo = multiplicar
console.log(calculo(4,5))

// objetos
let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}


// exercicio tipos
const funcionario: {supervisores: string[], baterPonto: (hora: number) => string} = {
    supervisores: ['João', 'Mauricio'],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário'
    }
}

//console.log(funcionario.baterPonto(8))

// Alias -> tipos personalizados
type Funcionario = {
    supervisores: string[], 
    baterPonto: (hora: number) => string
}

const funcionario2: Funcionario = {
    supervisores: ['Teste', 'Testee2'],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário'
    }
}

// UNION TYPES
// caso em que eu queira permitir apenas número e string, por exemplo
let nota: number | string = 10;
nota = '9'

// tipo NEVER -> explicitar quando vai acabar com erro ou vai ficar em algum tipo de looping
function falha(msg: string): never {
    // while(true) {}
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (! this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preco inválido')
        }
    }
}
produto.validarProduto();

// Exercício 2 -> transformar JS em TS
// let contaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }
 
// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
 
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)


// Exercício2 resolvido
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string, 
    contaBancaria: ContaBancaria, 
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 100,
    depositar(valor) {
        this.saldo += valor;
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['123455454', '3243242342']
}

correntista.contaBancaria.depositar(100);
console.log(correntista)