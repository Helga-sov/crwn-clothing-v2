import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form";

const SignIn = () => {
	// useEffect(() => {
	// 	async function _getRedirectResult() {
	// 		const response = await getRedirectResult(auth);

	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user);
	// 		}
	// 	}

	// 	_getRedirectResult();
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		//console.log(user);
	};

	return (
		<div>
			<h1> Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button> */}
			<SignUpForm />
		</div>
	);
};

export default SignIn;
