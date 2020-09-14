import retangulo from './retangulo';
//import { areaCircuferencia } from './circuferencia'
import { areaCircuferencia as circ } from './circuferencia'

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))