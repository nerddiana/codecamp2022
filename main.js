const h1 = document.querySelector("h1")
h1.innerText = "Hola mundo"
console.log(h1);

const ul = document.querySelector("ul");
console.log(ul);

const form = document.querySelector("form");
console.log(form);

const input = document.getElementById("tasktitle");
console.log(input);

const tasks = [
  { text: "Lavar ropa" },
  { text: "Tomar te" },
  { text: "Estudiar JavaScript" },
];

function render() {
  let template = "";

  for (const task of tasks) {
    // template = template + "<li>" + task.text + "</li>";
    template = `${template}\n<li>${task.text}</li>`;
  }

  console.log(template);

  ul.innerHTML = template;
}

render();

form.addEventListener("submit", function submit(event) {
  event.preventDefault();
  // tasks.push({ text: input.value });
  const text = document.createTextNode(input.value);
  const li = document.createElement("li");
  input.value = "";
  li.appendChild(text);
  li.onclick = function () {
    li.remove();
  }
  ul.appendChild(li);
})
