import { onSuccessfulLogin, onLoginFailure } from './login.js';

export const signUpWithEmail = async ()  => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(onSuccessfulLogin(this.props))
        .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                onLoginFailure.bind(this)('Weak Password!');
            } else {
                onLoginFailure.bind(this)(errorMessage);
            }
        });
}

export const signInWithEmail = async () => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onSuccessfulLogin(this.props))
        .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                this.onLoginFailure.bind(this)('Weak Password!');
            } else {
                this.onLoginFailure.bind(this)(errorMessage);
            }
        });
}