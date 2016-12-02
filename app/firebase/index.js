import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyC0ezB_sk3PhCTc-0XXQkKNfzsWAeoh2B8",
        authDomain: "mead-todo-app-320bf.firebaseapp.com",
        databaseURL: "https://mead-todo-app-320bf.firebaseio.com",
        storageBucket: "mead-todo-app-320bf.appspot.com",
        messagingSenderId: "441261971677"
      };
      firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
