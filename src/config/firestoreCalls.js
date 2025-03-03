import firebaseAcademia from "./firebaseConfig";
import { collection, doc, getDoc, getFirestore, query, where } from "firebase/firestore";

const db = getFirestore(firebaseAcademia);

//Hace la llamada a la base de datos
export const readDataFirestore = async (path, child, value) => {
    
    const q = query(collection(db, path), where(child, '==', value));
    const querySnapshot = await getDoc(q);

    // const docRef = doc(db, 'users', 'diegoa.cruz@softtek.com');
    // const docSnap = await getDoc(docRef);

    // return docSnap;
    return querySnapshot;
};