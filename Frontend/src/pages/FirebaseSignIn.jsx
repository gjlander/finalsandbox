// FirebaseUI
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { useEffect } from "react";

// Auth service
import auth from "../lib/firebase";

const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());

const FirebaseSignIn = () => {
    useEffect(() => {
        ui.start("#firebaseui-auth-container", {
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
            // Other config options...
        });
    }, []);
    // useEffect(() => {
    //     const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    //     ui.start('#firebaseui-auth-container', {
    //         callbacks: {
    //             signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //                 // Action if the user is authenticated successfully
    //             },
    //             uiShown: function() {
    //                 // This is what should happen when the form is full loaded. In this example, I hide the loader element.
    //                 document.getElementById('loader').style.display = 'none';
    //             }
    //         },
    //         signInSuccessUrl: 'https://www.anyurl.com', // This is where should redirect if the sign in is successful.
    //         signInOptions: [ // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
    //             {
    //                 provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //                 requireDisplayName: true,
    //                 disableSignUp: {
    //                     status: true
    //                 }
    //             }
    //         ],
    //         tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
    //         privacyPolicyUrl: function() { // URL to your privacy policy
    //             window.location.assign('https://www.example.com/privacy-policy');
    //         }
    //     });
    // }, []);

    return (
        <>
            <h1>Firebase SignIn</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">
                Loading form
            </div>
        </>
    );
};

export default FirebaseSignIn;
