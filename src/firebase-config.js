/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBCW4LxnNzXQW93tTjtksrQCwYQAPsiC4I",
  authDomain: "feather-globe.firebaseapp.com",
  databaseURL: "https://feather-globe-default-rtdb.firebaseio.com",
  projectId: "feather-globe",
  storageBucket: "feather-globe.appspot.com",
  messagingSenderId: "1078728398464",
  appId: "1:1078728398464:web:d9900f0a70cb8c80563865",
  measurementId: "G-QXV7STGYS7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
