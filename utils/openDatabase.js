const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open("myDatabase", 1);

    openRequest.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("movieDataStore")) {
        db.createObjectStore("movieDataStore");
      }
    };

    openRequest.onsuccess = (event) => {
      resolve(event.target.result);
    };

    openRequest.onerror = (event) => {
      reject("Failed to open database");
    };
  });
};

export { openDatabase };
