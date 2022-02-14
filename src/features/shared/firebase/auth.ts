import { getAuth } from 'firebase/auth';
import { fireApp } from '..';

const fireAuth = getAuth(fireApp);

export default fireAuth;
