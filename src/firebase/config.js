import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdxLD4R_8Ai1neFm3TcAP7AEPcMo1OY9g",
  authDomain: "events-saas-e8321.firebaseapp.com",
  projectId: "events-saas-e8321",
  storageBucket: "events-saas-e8321.appspot.com",
  messagingSenderId: "117512955814",
  appId: "1:117512955814:web:ccdc5b047124032a7e9167",
  measurementId: "G-87PLM9YKGD"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);