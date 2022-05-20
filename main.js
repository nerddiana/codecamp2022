const h1 = document.querySelector("h1")
h1.innerText = "Hola mundo"
console.log(h1);

const ul = document.querySelector("ul");
console.log(ul);

const tasks = [
  { text: "Lavar ropa" },
  { text: "Tomar te" },
  { text: "Estudiar JavaScript" },
];

let template = "";

for (const task of tasks) {
  // template = template + "<li>" + task.text + "</li>";
  const m = "mundo";
  template = `${template}\n<li>${task.text}</li>`;
}

console.log(template);

ul.innerHTML = template;
