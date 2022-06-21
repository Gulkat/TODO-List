import { deleteAll } from './deleteAll.js';
import { root, btnDeleteAll, btnDeleteAllText, inputTitle, inputTitleText, btnAdd, btnAddText } from './formTodoVariables.js';
import { creatToDo} from './createTodo.js';

btnDeleteAll.append(btnDeleteAllText);
root.append(btnDeleteAll);
btnDeleteAll.className = 'button';

inputTitle.append(inputTitleText);
root.append(inputTitle);
inputTitle.className = 'input';
inputTitle.placeholder = 'Enter todo...';

btnAdd.append(btnAddText);
root.append(btnAdd);
btnAdd.className = 'button';

// ADD
root.addEventListener('click', (event) => {
     if(event.target === btnAdd) {
          if (!inputTitle.value) {
               return;
          }
          creatToDo(inputTitle.value, false, Date.now());
     }
});

btnDeleteAll.addEventListener('click', deleteAll);

const todosFromStorage = JSON.parse(localStorage.getItem('todos'));

if (todosFromStorage) {
     todosFromStorage.forEach(todo => {
          root.append(creatToDo(todo.todoText, todo.isChecked, todo.todoId));
     });
}



