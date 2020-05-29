export const onSuccessfulLogin = (props) => {
	props.navigation.navigate('HomeScreen');
}


export const onLoginFailure = (errorMessage) => {
	this.setState({ error: errorMessage, loading: false });
}