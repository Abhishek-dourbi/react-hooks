import React, { useSyncExternalStore } from 'react'
import useOnlineStatus from './UseOnlineStatus';
import todosStore from './TodoStore';

// function subscribe(callback) {
//   window.addEventListener('online', callback);
//   window.addEventListener('offline', callback);

//   return () => {
//     window.removeEventListener('online', callback);
//     window.removeEventListener('offline', callback);
//   }
// };

// function getSnapshot() {
//   return navigator.onLine;
// }

const UseSyncExternalStore = () => {
  const isOnline = useOnlineStatus();
  // const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

  return (
    <div>
      {isOnline ? '✅ Online' : '❌ Offline'}
      {/* <button onClick={() => {
        todosStore.addTodo(JSON.parse(todos)) 
      }}>
        Add
      </button>
      {
        JSON.parse(todos)?.map((todo) => <div>{todo.text}</div>)
      } */}
    </div>
  )
}

export default UseSyncExternalStore;