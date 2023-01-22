import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlRjBme8g_OrOUlb1OCrQdJTPZRuub5Ss",
  authDomain: "angular-node-firebase-f7ea2.firebaseapp.com",
  projectId: "angular-node-firebase-f7ea2",
  storageBucket: "angular-node-firebase-f7ea2.appspot.com",
  messagingSenderId: "607298818857",
  appId: "1:607298818857:web:cf7818dca4c5b5534a9d38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
