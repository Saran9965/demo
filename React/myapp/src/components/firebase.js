import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";//Realtime database

const firebaseConfig = {
    apiKey: "AIzaSyDR3HCnoUQOR-j9eFkEoo6f0QPvMZiTHEA",
    authDomain: "reactbackend-8345b.firebaseapp.com",
    projectId: "reactbackend-8345b",
    databaseURL: "https://reactbackend-8345b-default-rtdb.europe-west1.firebasedatabase.app/",//Realtime db URL
    storageBucket: "reactbackend-8345b.appspot.com",
    messagingSenderId: "57024463752",
    appId: "1:57024463752:web:bbe58ec2fc2b7501fc303d",
    measurementId: "G-R5FD0EVT6L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);//database export

export { auth, database };
export default app;
