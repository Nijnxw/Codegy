import firebase from 'firebase';

export const checkUserLoggedIn = (props) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            props.navigation.navigate('HomeScreen');
        } else {
            props.navigation.navigate('LoginScreen');
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
