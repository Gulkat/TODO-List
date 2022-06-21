const TodoConstructor = function(todoText, todoId, dateTodo, isChecked) {
    this.todoText = todoText;
    this.todoId = todoId;
    this.dateTodo = dateTodo;
    this.isChecked = isChecked;
};

export { TodoConstructor };