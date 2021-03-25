//! Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('#todo-list');
const filterOption = document.querySelector('.todo-filter');

//!Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filter);
//! functions
function addTodo(event) {
    event.preventDefault();
    // creating TodoDiv
    const todoDiv = document.createElement('Div');
    todoDiv.className = 'todo';
    //creating li
    const li = document.createElement('li');
    li.className = 'todo-item';
    // adding input text to todo list
    li.innerText = todoInput.value;
    // adding the input value to local Storage
    saveLocalTodos(todoInput.value);
    // creating check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fas fa-check"></i>`
    checkButton.className = `check-btn`;
    // creating delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
    deleteButton.className = `delete-btn`;
    todoDiv.appendChild(li);
    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(deleteButton);
    // Append to List
    todoList.appendChild(todoDiv);
    //clearing input box
    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    // if click is on trash
    if (item.classList.contains('delete-btn')) {
        //animation
        item.parentElement.classList.add('fall');
        //removing item from the localstorage
        removeTodos(item.parentElement);
        // when transition completed then remove the element
        item.parentElement.addEventListener('transitionend', function() {
            item.parentElement.remove()

        });

    }

    // if click is on check
    if (item.classList.contains('check-btn')) {
        item.parentElement.classList.toggle('completed');
    }
}
// function to filter the todo-list
function filter(event) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case 'All':
                todo.style.display = 'flex';
                break;
            case 'Completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';

                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'Uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';

                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}


//function to save todo in the local storage
function saveLocalTodos(todo) {
    let todos
        //? check if already have todos in local storage
    if (localStorage.getItem('todos') === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem('todos'))

    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}
// function to load previous save todos

function getTodos(todo) {
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo) => {
        const todoDiv = document.createElement('Div');
        todoDiv.className = 'todo';
        //creating li
        const li = document.createElement('li');
        li.className = 'todo-item';
        // adding input text to todo list
        li.innerText = todo;
        // creating check button
        const checkButton = document.createElement('button');
        checkButton.innerHTML = `<i class="fas fa-check"></i>`
        checkButton.className = `check-btn`;
        // creating delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
        deleteButton.className = `delete-btn`;
        todoDiv.appendChild(li);
        todoDiv.appendChild(checkButton);
        todoDiv.appendChild(deleteButton);
        // Append to List
        todoList.appendChild(todoDiv);
    });
}

// function to remove todos from the local storage
function removeTodos(todo) {
    let todos
        //? check if already have todos in local storage
    if (localStorage.getItem('todos') === null) {
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem('todos'))

    }
    let index = todos.indexOf(todo.children[0].innerText);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}