import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJcGf4cmw7-CCXVdgj9mUet6Px0raRP2o",
  authDomain: "olx-clone-9a425.firebaseapp.com",
  projectId: "olx-clone-9a425",
  storageBucket: "olx-clone-9a425.appspot.com",
  messagingSenderId: "92978380879",
  appId: "1:92978380879:web:9ec9f537662a9402b36a3a"
  };

export default firebase.initializeApp(firebaseConfig)