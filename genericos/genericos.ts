function echo(objeto: any) {
    return objeto
}

// console.log(echo('João').length)
// console.log(echo(1).length)
// console.log(echo({nome: 'João', idade: 27}))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(1))
console.log(echoMelhorado({nome: 'João', idade: 27}).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2 , 3])
imprimir<number>([1, 2 , 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Teste', idade: 26},
    {nome: 'Beltrano', idade: 34}
])

type Aluno = {nome: string, idade: number};
imprimir<Aluno>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Teste', idade: 26},
    {nome: 'Beltrano', idade: 34}
])

// tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))


// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom', 'Dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3,4).executar())


class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca/ dia)} dia(s)`
    }
}

const d1  = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos> entrar, proximo, imprimir

class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(x: T): void {
        this.fila.push(x);
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1);
            return primeiro
        } else {
            return null
        }
        
    }

    imprimir(): void {
       console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

const novaFila = new Fila<number>(1,2,3)
novaFila.imprimir()

//const outraFila = new Fila<boolean>(true, false) -> erro por conta da constraint



// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
type Par<X, Y> = {chave: X, valor: Y};

class Mapa<X, Y> {
    items: Array<Par<X, Y>> = new Array<Par<X, Y>>()

    obter(chave: X): Par<X, Y> | null {
        const resultado = this.items.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }

    colocar(par: Par<X, Y>): void {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        } else {
            this.items.push(par);
        }
    }

    limpar(): void {
        this.items = new Array<Par<X, Y>>();
    }

    imprimir(): void {
        console.log(this.items)
    }
}

    
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
    
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()