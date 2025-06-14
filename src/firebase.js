import { initializeApp } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace this entire firebaseConfig object with the one from your Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCyNJxopm1M-3juUWVcw4j5A2URfLmC3zs",
    authDomain: "pucon-851e2.firebaseapp.com",
    projectId: "pucon-851e2",
    storageBucket: "pucon-851e2.firebasestorage.app",
    messagingSenderId: "628461030156",
    appId: "1:628461030156:web:1fa84df8573bf942361729",
    measurementId: "G-1CHJ7M89ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set language to device language
auth.useDeviceLanguage();

// Enable persistence to remember logged in users
// This is optional but recommended
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Auth persistence error:", error);
  });

export { auth };
export default app; 