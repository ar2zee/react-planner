import * as keys from '../config/key_values'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: keys.FIREBASE_KEY,
    authDomain: "react-planner-1.firebaseapp.com",
    databaseURL: "https://react-planner-1.firebaseio.com",
    projectId: "react-planner-1",
    storageBucket: "react-planner-1.appspot.com",
    messagingSenderId: "19755312543"
  };
  firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;