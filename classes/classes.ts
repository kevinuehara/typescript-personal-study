class Data {
    // público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2018
console.log(casamento)

/////////////////////////////////////////////////////////////////////////////////////////////

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) { }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamento.ano = 2018
console.log(casamento)

// Desafio Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// obs 1: Desconto é opcional (valor padrão 0)
// obs 2: Criar dois produtos: passando dois e três params

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {}
    
    precoComDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }

}

const prod1 = new Produto('produto1', 4.20);
const prod2 = new Produto('produto2', 18.80, 0.15)

console.log(prod1)
console.log(prod2.resumo())

/////////////////////////////////////////////////////////////////////////////////////////////

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
 
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        
        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
console.log(carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.frear())

/////////////////////////////////////////////////////////////////////////////////////////////

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari('F40', 324)
console.log(f40.acelerar())
console.log(f40.frear())


///////////////////////////////////////////////////////////////
// getters and setters

class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1)

//////////////////////////////////////////////////////////// STATIC

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio;
    }
}

console.log(Matematica.areaCirc(4))

//////////////////////////////////////////////////////////// Abstrata

// Classe Abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

////////////////////////////////////////////////////// Singleton

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())

// Somente Leitura
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8' erro
// turboHelice.prefixo = 'PT_DEF' erro