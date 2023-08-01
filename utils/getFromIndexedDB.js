import { openDatabase } from "./openDatabase";

const getFromIndexedDB = async (key) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction("movieDataStore", "readonly");
    const store = transaction.objectStore("movieDataStore");
    const request = store.get(key);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject("Failed to get data from IndexedDB");
      };
    });
  } catch (error) {
    console.error("Failed to get data from IndexedDB", error);
  }
};

export { getFromIndexedDB };
