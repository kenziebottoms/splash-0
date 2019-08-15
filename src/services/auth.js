import firebaseService from "./Firebase";
import * as firebase from "firebase";

let provider = new firebase.auth.GoogleAuthProvider();

const storage = window.localStorage;
const USER_TOKEN = "splash_user_token";

async function authenticate() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        storage.setItem(USER_TOKEN, token);

        let { user } = result;

        return firebaseService.addUser(user.uid, user.displayName, user.email);
      })
      .then(uid => resolve(uid))
      .catch(error => reject(error));
  });
}

function logOut() {
  storage.removeItem(USER_TOKEN);
}

function currentUserToken() {
  return storage.getItem(USER_TOKEN);
}

export default { authenticate, logOut, currentUserToken };
