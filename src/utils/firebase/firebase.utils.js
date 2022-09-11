// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDh9QQNXV8h8KQSKBin7jMSjhEJlo94wMI",
	authDomain: "crwn-clothing-db-c953f.firebaseapp.com",
	projectId: "crwn-clothing-db-c953f",
	storageBucket: "crwn-clothing-db-c953f.appspot.com",
	messagingSenderId: "1084031791563",
	appId: "1:1084031791563:web:6d2ab3e6f6803511bac64e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	//console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	//console.log(userSnapshot);
	//console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;

	//if user data does not exist
	// create / set the document with the data from userAuth in my collection
	//check if user data exists

	//return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
