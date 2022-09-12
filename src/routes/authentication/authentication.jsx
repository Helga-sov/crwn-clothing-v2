import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./authentication.styles.scss";

const Authentication = () => {
	// useEffect(() => {
	// 	async function _getRedirectResult() {
	// 		const response = await getRedirectResult(auth);

	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user);
	// 		}
	// 	}

	// 	_getRedirectResult();
	// }, []);

	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
