const ul = document.querySelector("ul");
console.log(ul);

const form = document.querySelector("form");
console.log(form);

const input = document.getElementById("tasktitle");
console.log(input);

let tasks = [];

function remove(event) {
  let index = 0;
  for (const taskIndex in tasks) {
    const task = tasks[taskIndex];
    if (task.text === event.target.textContent) {
      index = taskIndex;
    }
  }

  console.log("match index", index);
  // const index = tasks.findIndex((task) => event.target.textContent === task.text);

  if (index >= 0) {
    tasks.splice(index, 1);
    render(tasks);
  }
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
  tasks.push({ text: input.value });
  input.value = "";
  render(tasks);
})
