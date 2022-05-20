console.log('Hola mundo :D')

// JSON JavaScript Object Notation
const obj = {
  color: "negro",
  saludar() {
    console.log("color: ", this.color);
  }
}

obj.saludar();

const obj2 = {
  color: "negro",
  altura: 120,
}

class Persona {
  name = ''
  edad = 0
  constructor(n, e) {
    this.name = n
    this.edad = e
  }
  saludar() {
    console.log('Hola soy', this.name)
  }
}

const persona = new Persona("Diana", 19)

persona.saludar();

const personas = [new Persona("Diana", 19), new Persona("Candela", 19), new Persona("Anto", 19)]

function remove(indice) {
  console.log('Click en remove', indice)
}

const frutas = ["Mango", "Fresa", 1, 1.0, new Persona("Persona 1", 20)];

const key = "name";
console.log(frutas[4].name)

const foo = function () {
  const key = "otro valor";
  console.log("Hi foo!", key);
}

console.log(typeof foo);

foo();

console.log(key);

const bar = () => {
  console.log("bar!");
}

bar();
