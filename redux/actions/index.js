import { USER_STATE_CHANGE } from '../constants';
import { getAuth } from '@firebase/auth';
import { doc, getDoc } from "@firebase/firestore";
import { db } from '../../firebaseConfig';


export function fetchUser() {
	return ((dispatch) => {
		const colRef = doc(db, "users", getAuth().currentUser.uid)
		getDoc(colRef)
		.then(snapshot => {
			if(snapshot.exists) {
				dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
			} else {
				console.log('User does not exist');
			}
		})
	})
}