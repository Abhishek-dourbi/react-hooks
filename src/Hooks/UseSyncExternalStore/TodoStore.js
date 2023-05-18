let listeners = [];

const todosStore = {
    subscribe(listener) {
        listeners = [...listeners, listener];

        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
      
    getSnapshot() {
        return localStorage.getItem('todos');
    },

    addTodo(todos = []) {
        const currentId = todos?.length > 0 ? todos[todos.length - 1].id : 0;
        const currentTodos = todos ? todos : [];
        localStorage.setItem('todos', JSON.stringify([...currentTodos, {id: currentId + 1, text: `Todo # ${currentId + 1}`}]))
        emitChange();
    }
}

function emitChange() {
    for (let listener of listeners) {
      listener();
    }
  }

export default todosStore;