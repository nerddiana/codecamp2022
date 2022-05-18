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

const persona = [new Persona("Diana", 19), new Persona("Candela", 19), new Persona("Anto", 19)]

persona[2].saludar()

console.log(persona instanceof Persona)

const frutas = ["Fresa", "Mango", "Kiwi"]
frutas[1] = "Banana"
frutas.push("Mandarina")
console.log(frutas[3])
