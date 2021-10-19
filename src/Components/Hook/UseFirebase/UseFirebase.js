import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializationAuthentication from '../../LogIn/Firebase/firebase.init';
initializationAuthentication();
const useFirebase = () => {
	const [
		user,
		setUser
	] = useState({});
	const [
		error,
		setError
	] = useState('');
	const [
		isLoading,
		setIsLoading
	] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	const googleSingIn = () => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUser(result.user);
				console.log(result.user);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);
	const logOut = () => {
		setIsLoading(true);
		signOut(auth).then(() => {}).finally(() => setIsLoading(false));
	};

	return {
		user,
		error,
		isLoading,
		googleSingIn,
		logOut
	};
};
export default useFirebase;
