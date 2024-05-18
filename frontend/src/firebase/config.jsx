import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// require('dotenv').config();
// require
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
  apiKey: "AIzaSyAm9UPvdRo06jGyOdRmlMH15wWZFGZkM1w",
  authDomain: "hpdsx-62c05.firebaseapp.com",
  projectId: "hpdsx-62c05",
  storageBucket: "hpdsx-62c05.appspot.com",
  messagingSenderId: "180990730647",
  appId: "1:180990730647:web:e595dba6fd030dd00c24d2",
  measurementId: "G-147779BRZP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initialize firestore
const db = firebase.firestore();
// initialize auth
const projectAuth = firebase.auth();
//timestamp
const timestamp = firebase.firestore.Timestamp;
// initialize storage
const projectStorage = firebase.storage();
export { db, projectAuth, projectStorage, timestamp };
