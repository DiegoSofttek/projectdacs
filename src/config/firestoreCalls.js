import firebaseAcademia from "./firebaseConfig";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

const db = getFirestore(firebaseAcademia);

//Hace la llamada a la base de datos
export const readDataFirestore = async (path, child, value) => {
    
    //Para devolver todos los documentos que contengan el email diegoa.cruz@softtek.com
    const q = query(collection(db, path), where(child, '==', value));
    const querySnapshot = await getDocs(q);

    return querySnapshot;

    //Para devolver un solo documento con el email diegoa.cruz@softtek.com
    // const docRef = doc(db, 'users', 'diegoa.cruz@softtek.com');
    // const docSnap = await getDoc(docRef);

    // return docSnap;
};