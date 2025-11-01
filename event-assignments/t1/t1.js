// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');

addBtn.addEventListener('click', function () {
  dialog.showModal();
});

const form = dialog.querySelector('form');
const input = form.querySelector('input[type="text"]');

// add event listener to add new to do item button
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    const newId = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
    todoList.push({
      id: newId,
      task: value,
      completed: false,
    });
    input.value = '';
    refreshList();
    dialog.close();
  }
});

const ul = document.querySelector('body ul');

function refreshList() {
  ul.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const checked = todo.completed ? 'checked' : '';
    ul.insertAdjacentHTML(
      'beforeend',
      `<li class="li-item">
      <input type="checkbox" id="todo-${todo.id}" ${checked}>
      <label for="todo-${todo.id}">${todo.task}</label>
      <button type="button" onclick="deleteItem(this.parentNode)">Delete</button>
    </li>`
    );

    const li = ul.lastElementChild;
    const checkbox = li.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      todo.completed = checkbox.checked;
      console.log(todoList);
    });
  }
  console.log(todoList);
}

function deleteItem(li) {
  // Find index of li in ul
  const items = Array.from(ul.children);
  const i = items.indexOf(li);
  if (i > -1) {
    todoList.splice(i, 1); // Remove from array
    ul.removeChild(li); // Remove from DOM
    console.log(todoList);
  }
}

refreshList();
