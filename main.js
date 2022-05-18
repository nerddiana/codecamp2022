console.log('Hola mundo :D')

const persona = {
  name: "Diana",
  edad: 20,
  saludar: function () {
    console.log('Hola soy', this.name)
  },
  incrementarEdad() {
    this.edad += 1
  },
  decirEdad: function () {
    console.log('Mi edad es', this.edad)
  }
}

const persona2 = {
  name: "Candela",
  edad: 20,
}

persona.saludar()
persona.decirEdad()