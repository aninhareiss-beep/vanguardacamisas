import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyDWq3qah00GKg9LkKvTiMEvOnkE72D0E2M",

    authDomain: "vanguarda2027.firebaseapp.com",

    projectId: "vanguarda2027",

    storageBucket: "vanguarda2027.firebasestorage.app",

    messagingSenderId: "663509021331",

    appId: "1:663509021331:web:b91a3e021b2e6890629366",

    measurementId: "G-LLQKQN63FG"

};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


export { db };