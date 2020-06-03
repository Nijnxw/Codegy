import firebase from 'firebase';

export const checkUserExists = () => {
	console.log("checking");
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			return true;
		} else {
			return false;
		}
	})
}

export const addUser = () => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user != null) {
			this.setState({ user: user });
		}
	})
}

export const userSignOut = () => {
	firebase.auth().signOut();
}
