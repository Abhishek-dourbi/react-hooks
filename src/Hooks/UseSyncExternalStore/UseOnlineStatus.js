import { useSyncExternalStore } from 'react';

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
  
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    }
  };
  
  function getSnapshot() {
    return navigator.onLine;
  }

const useOnlineStatus = () => {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return isOnline
  
}

export default useOnlineStatus;