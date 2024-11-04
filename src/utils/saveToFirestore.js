// src/utils/saveToFirestore.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const saveToFirestore = async (cartItems) => {
  try {
    const docRef = await addDoc(collection(db, "carts"), {
      items: cartItems,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default saveToFirestore;
