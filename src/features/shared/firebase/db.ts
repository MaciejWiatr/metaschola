import { getFirestore } from 'firebase/firestore';
import { fireApp } from '..';

const db = getFirestore(fireApp);

export default db;
