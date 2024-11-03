import { db } from './firebase.js';
import { doc, query, collection, getDoc, setDoc, getDocs, docSnap } from 'firebase/firestore';

//Function to add new item to inventory
export async function addInventoryItem(itemName) {
  try {
    const docRef = doc(collection(db, "inventory"), itemName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export async function removeInventoryItem(itemName) {
  try {
    const docRef = doc(collection(db, "inventory"), itemName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }

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
