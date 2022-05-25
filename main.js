const ul = document.querySelector("ul");
console.log(ul);

const form = document.querySelector("form");
console.log(form);

const input = document.getElementById("tasktitle");
console.log(input);

let tasks = [
  { text: "Lavar la ropa" },
  { text: "Cita médica" },
];

function remove(event) {
  // let index = -1;
  // for (const taskIndex in tasks) {
  //   const task = tasks[taskIndex];
  //   console.log("task", task.text);
  //   if (task.text === event.target.textContent) {
  //     index = taskIndex;
  //   }
  // }

  // const index = tasks.findIndex((task) => event.target.textContent === task.text);
  // console.log("match index", index);

  // if (index >= 0) {
  //   tasks.splice(index, 1);
  //   render(tasks);
  // }

  tasks = tasks.filter((task) => task.text !== event.target.textContent);
  render(tasks);
}

function render(tasks) {
  console.log(tasks);
  ul.innerHTML = "";
  for (task of tasks) {
    const text = document.createTextNode(task.text);
    const li = document.createElement("li");
    li.appendChild(text);
    li.addEventListener("click", remove);
    ul.appendChild(li);
  }
}

render(tasks);

form.addEventListener("submit", function submit(event) {
  event.preventDefault();
  tasks = tasks.concat({ text: input.value });
  input.value = "";
  render(tasks);
})
