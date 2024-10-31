import { db } from './firebase.js';
import { query, collection, addDoc, getDocs } from 'firebase/firestore';

//Function to add new item to inventory
export async function addInventoryItem(name, quantity) {
  try {
    await addDoc(collection(db, "inventory"), {
      name: name,
      quantity: quantity,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Function to fetch all inventory items
export async function getInventoryItems() {
  // const querySnapshot = await getDocs(collection(db, 'inventory'));
  // return querySnapshot.docs.map((doc) => ({ name: doc.id, ...doc.data() }));
  try {
    const snapshot = query(collection(db, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    console.log(inventoryList);
    return inventoryList;
  } catch (error) {
    console.log(error);
  }

}
