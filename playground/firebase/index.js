import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC0ezB_sk3PhCTc-0XXQkKNfzsWAeoh2B8",
    authDomain: "mead-todo-app-320bf.firebaseapp.com",
    databaseURL: "https://mead-todo-app-320bf.firebaseio.com",
    storageBucket: "mead-todo-app-320bf.appspot.com",
    messagingSenderId: "441261971677"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

  firebaseRef.set({
      app: {
         name: 'Todo App',
         version: '1.0.0'
      },
      isRunning: true,
      user: {
          name: 'Bird',
          age: 25
      }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
      console.log('child added', snapshot.key, snapshot.val());
  });

  todosRef.push({
      text: 'Todo 1'
  });

  todosRef.push({
      text: 'Todo 2'
  });
