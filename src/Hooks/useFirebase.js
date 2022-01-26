import React, { useEffect, useState } from 'react';
import initializeFirebase from "../Component/Authentication/Firebase/firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
//Initialize Firebase
initializeFirebase();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState();
    const auth = getAuth();

    const registerUser = (username, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('')
                const user = userCredential.user;
                setUser(user);
                // ...
                // saveUser(username, email, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: username,
                    email: email,

                }).then(() => {
                }).catch((error) => {
                });
                history('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorCode, errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                const destination = location?.state?.from || '/';
                history(destination);
                setAuthError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorCode, errorMessage);
            })
            .finally(() => setIsLoading(false));
    }


    //Google Sign in Funciton
    const googleSignin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                // saveUser(user.name, user.email, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history(destination);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                setAuthError(errorCode, errorMessage)
                // ...
            }).finally(() => setIsLoading(false));

    }

    //Observer user state
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    // const saveUser = (email, displayName, phone, location, method) => {
    //     const user = { email, displayName, phone, location }
    //     fetch('https://ancient-ravine-11592.herokuapp.com/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //         })

    // }

    return {
        user,
        loginUser,
        registerUser,
        googleSignin,
        loading,
        authError,
        logOut,
        admin,
    }
};

export default useFirebase;