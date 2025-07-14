
import { initializeApp } from "firebase/app";
//importar o metodo firestore
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFBil3GjFGyQoMGFCt9luUmrdE7pa8zZw",
  authDomain: "miniblog-2b24f.firebaseapp.com",
  projectId: "miniblog-2b24f",
  storageBucket: "miniblog-2b24f.firebasestorage.app",
  messagingSenderId: "502817000806",
  appId: "1:502817000806:web:d4600f3ae781f674b5cca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//inicializar o banco de dados da firestore chamando o banco de dados de db
const db = getFirestore(app);
//no final exporta o banco de dados
export {db};