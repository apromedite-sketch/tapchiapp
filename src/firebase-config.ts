import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8q6yLQ0DkD1U5zCle1N6wE-BJi72GWOE",
  authDomain: "long-loginall.firebaseapp.com",
  projectId: "long-loginall",
  storageBucket: "long-loginall.firebasestorage.app",
  messagingSenderId: "690848990269",
  appId: "1:690848990269:web:49f5106190f557eba89654",
  measurementId: "G-QSY2N1YRRP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;