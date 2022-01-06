import { USER_STATE_CHANGE } from '../constants';
import { auth } from '@firebase/auth';
import { doc, getDoc } from "@firebase/firestore";

export function fetchUser() {
	return ((dispatch) => {
		const colRef = doc(db, "users", auth().currentUser)
		getDoc(colRef)
		.then(snapshot => {
			if(snapshot.exists) {
				dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data })
			} else {
				console.log('User does not exist');
			}
		})
	})
}