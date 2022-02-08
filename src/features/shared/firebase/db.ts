import { fireApp } from "..";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(fireApp);

export default db;
