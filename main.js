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
const personas = [new Persona("Diana", 19), new Persona("Candela", 19), new Persona("Anto", 19)]

personas[2].saludar()

console.log(persona['name'])

for (const atributo in persona) {
  console.log(persona[atributo])
}
