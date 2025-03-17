import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDR3HCnoUQOR-j9eFkEoo6f0QPvMZiTHEA",
    authDomain: "reactbackend-8345b.firebaseapp.com",
    projectId: "reactbackend-8345b",
    storageBucket: "reactbackend-8345b.firebasestorage.app",
    messagingSenderId: "57024463752",
    appId: "1:57024463752:web:bbe58ec2fc2b7501fc303d",
    measurementId: "G-R5FD0EVT6L"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth=app.auth();

export default app;