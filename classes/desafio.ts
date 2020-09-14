    // Exercício 1 - Classe
    class Moto {
        public velocidade: number = 0
        
        constructor(public nome: string) {}

        buzinar(): void {
            console.log('Toooooooooot!')
        }

        acelerar(delta: number): void {
            this.velocidade = this.velocidade + delta;
        }
    }
     
    const moto = new Moto('Ducati')
    moto.buzinar()
    console.log(moto.velocidade)
    moto.acelerar(30)
    console.log(moto.velocidade)
     
    // Exercício 2 - Herança
    abstract class Objeto2D {
        public base: number = 0;
        public altura: number = 0;

        abstract area(): number;
    }
   
    class Retangulo extends Objeto2D {
        area(): number {
            return this.base * this.altura;
        }
    }
     
    const retangulo: Objeto2D = new Retangulo();
    retangulo.base = 5
    retangulo.altura = 7
    console.log(retangulo.area())
     
    // Exercício 3 - Getters & Setters
    class Estagiario {
        private _primeiroNome: string = '';

        get primeiroNome() {
            return this._primeiroNome;
        }

        set primeiroNome(valor: string) {
            if (valor.length >= 3) {
                this._primeiroNome = valor
            } else {
                this._primeiroNome = ''
            }
        }
    }

    const estagiario = new Estagiario
    console.log(estagiario.primeiroNome)
    estagiario.primeiroNome = 'Le'
    console.log(estagiario.primeiroNome)
    estagiario.primeiroNome = 'Leonardo'
    console.log(estagiario.primeiroNome)