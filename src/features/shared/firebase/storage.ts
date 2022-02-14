import { getStorage } from 'firebase/storage';
import { fireApp } from '..';

const fireStorage = getStorage(fireApp);

export default fireStorage;
