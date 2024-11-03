import { db } from './firebase.js';
import { doc, query, collection, getDoc, setDoc, getDocs, docSnap, deleteDoc } from 'firebase/firestore';

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
export async function getInventoryItems(searchText) {
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

    if (searchText == null || searchText == "") {
      return inventoryList;
    } else {
      const filteredInventory = inventoryList.filter((item) => {
        const filteredItemName = item.name;
        return filteredItemName.toLowerCase().includes(searchText.toLowerCase());
      });
      return filteredInventory;
    }
  } catch (error) {
    console.log(error);
  }

}
