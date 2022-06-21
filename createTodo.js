import { inputTitle, root } from './formTodoVariables.js';
import { TodoConstructor } from './todoConstructor.js';

let todos = [];
const creatToDo = (todoText, isChecked, todoId) => {
    const todoElement = document.createElement('div');
    const todoElementData = document.createTextNode('');
    todoElement.append(todoElementData);
    root.append(todoElement);

    const btnCheck = document.createElement('button');
    const btnCheckText = document.createTextNode('✔');
    btnCheck.append(btnCheckText);
    root.append(btnCheck);
    todoElement.append(btnCheck);
    btnCheck.className = 'check';
    btnCheck.id = todoId;

    const todoTitle = document.createElement('div');
    const todoTextNode = document.createTextNode(todoText);
    todoTitle.append(todoTextNode);
    root.append(todoTitle);
    todoElement.append(todoTitle);
    todoTitle.className = 'textTodo';

    const btnX = document.createElement('button');
    const btnXText = document.createTextNode('X');
    btnX.append(btnXText);
    root.append(btnX);
    btnX.className = 'button__closed';
    todoElement.append(btnX);

    // Date
    const date = new Date().toLocaleDateString();
    const todoElementDate = document.createElement('div');
    const todoElementDateText = document.createTextNode(date);
    todoElementDate.append(todoElementDateText);
    root.append(todoElementDate);
    todoElement.append(todoElementDate);
    todoElementDate.className = 'date';

    if(isChecked) {
        todoElement.classList.toggle('textDecoration');
        todoElement.classList.toggle('dataElement');
    } else {
        todoElement.classList.toggle('dataElement');
    }

    todoElement.dataset.todoId = todoId;

    const todo = new TodoConstructor(todoText, todoId, date, isChecked);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    inputTitle.value = '';

    // ✔
    todoElement.addEventListener('click', (event) => {
        if(event.target === btnCheck) {
            todoElement.classList.toggle('textDecoration');
        }

        const selectedTodo = todos.find(todo => +todo.todoId === +event.target.id);
        selectedTodo.isChecked = !selectedTodo.isChecked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });

    // X
    root.addEventListener('click', (event) => {
        if(event.target === btnX) {
            todos = JSON.parse(localStorage.getItem('todos'));
            const newList = todos.filter(obj => obj.todoId !== todoId);
            localStorage.setItem('todos', JSON.stringify(newList));
            todoElement.remove();
        }
    });

    return todoElement;
}

export { creatToDo };