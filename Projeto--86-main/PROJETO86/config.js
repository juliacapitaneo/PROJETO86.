import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBePUEW5JxDXG3yCQe-kH7uT8vP6PKFng8",
  authDomain: "bike-38594.firebaseapp.com",
  databaseURL: "https://bike-38594-default-rtdb.firebaseio.com",
  projectId: "bike-38594",
  storageBucket: "bike-38594.appspot.com",
  messagingSenderId: "145794290397",
  appId: "1:145794290397:web:6cc183566e431c0d924134"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
