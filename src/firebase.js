import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGb-06t-3aydXzjAVjUqv3i7rhpXZdnYY",
    authDomain: "cycle-hub-39af6.firebaseapp.com",
    projectId: "cycle-hub-39af6",
    storageBucket: "cycle-hub-39af6.appspot.com",
    messagingSenderId: "950100753300",
    appId: "1:950100753300:web:9fc2bde85ec84488396d81"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();   
export {auth, firebase};