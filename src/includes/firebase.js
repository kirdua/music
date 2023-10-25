import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAAAyTcD_9qiB3paoHrWsbJN8lVAVtXJHA",
  authDomain: "music-temp-2a2ab.firebaseapp.com",
  projectId: "music-9e180",
  storageBucket: "music-temp-2a2ab.appspot.com",
  appId: "1:513389509498:web:f976453109bb87de1034c3",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection("users")
const songsCollection = db.collection("songs")
const commentsCollection = db.collection("comments")

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
}
