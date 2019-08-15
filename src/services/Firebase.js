import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBn0TB_zll1ZDf0FziYBSm_omFiwJ-NpYU",
  authDomain: "dummy-project-3b430.firebaseapp.com",
  databaseURL: "https://dummy-project-3b430.firebaseio.com",
  projectId: "dummy-project-3b430",
  storageBucket: "dummy-project-3b430.appspot.com",
  messagingSenderId: "88576294897",
  appId: "1:88576294897:web:a48d7631da9bcfb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(userId, name, email) {
  return firebase
    .database()
    .ref("splash/users/" + userId)
    .set({
      username: name,
      email: email
    });
}

export default { addUser };
