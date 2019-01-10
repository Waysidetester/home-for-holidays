import firebase from 'firebase/app';
import fbAccess from '../fbAccess/fbAccess';
import 'firebase/auth';

const initFirebase = () => {
  firebase.initializeApp(fbAccess);
};

const googLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const logout = () => {
  firebase.auth().signOut();
};

export default { initFirebase, googLogin, logout };
