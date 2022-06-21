export const deleteAll = () => {
     let deleteAllElement = document.querySelectorAll('.dataElement');
     for (let i = 0; i < deleteAllElement.length; i++) {
          deleteAllElement[i].remove();
     }
     localStorage.removeItem('todos');
};