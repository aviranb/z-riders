import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyATTnM_ZQJVi_ZNYaXTEEV5ujjR7dZkaDY",
    authDomain: "z-riders.firebaseapp.com",
    databaseURL: "https://z-riders.firebaseio.com",
    projectId: "z-riders",
    storageBucket: "z-riders.appspot.com",
    messagingSenderId: "636493068785"
  };

let app = Firebase.initializeApp(config)
export const db = app.database()

//export const users = db.ref('users-test');
