import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCvnmmIstI0wTGviELoGhEM0dd0OF8pe_o",
	authDomain: "instagram-clone-161f5.firebaseapp.com",
	projectId: "instagram-clone-161f5",
	storageBucket: "instagram-clone-161f5.appspot.com",
	messagingSenderId: "345388273815",
	appId: "1:345388273815:web:aea23621cb48f82499d9d2",
	measurementId: "G-GFN04H1WK4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };