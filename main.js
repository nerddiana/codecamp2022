console.log('Hola mundo :D')

class Persona {
  name = ''
  edad = 20
  constructor(n, e) {
    this.name = n
    this.edad = e
  }
  saludar() {
    console.log('Hola soy', this.name)
  }
}

const persona = new Persona("Diana", 19)
const persona2 = new Persona("Candela", 19)
const persona3 = new Persona("Anto", 19)

persona.saludar()
persona2.saludar()
persona3.saludar()

console.log(persona instanceof Persona)
