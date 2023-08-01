import { openDatabase } from "./openDatabase";

const storeInIndexedDB = async (key, data) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction("movieDataStore", "readwrite");
    const store = transaction.objectStore("movieDataStore");
    const request = store.put(data, key);

    request.onsuccess = () => {
      console.log("Data successfully stored in IndexedDB");
    };

    request.onerror = () => {
      console.error("Failed to store data in IndexedDB");
    };
  } catch (error) {
    console.error("Failed to store data in IndexedDB", error);
  }
};

export { storeInIndexedDB };
