import { fireApp } from "..";
import { getStorage } from "firebase/storage";

const fireStorage = getStorage(fireApp);

export default fireStorage;
