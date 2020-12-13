import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCEm5lhhFQfY-ztT_ikWl9Az6r06nnI2Sk",
  authDomain: "login-form-auth.firebaseapp.com",
  databaseURL: "https://login-form-auth-default-rtdb.firebaseio.com",
  projectId: "login-form-auth",
  storageBucket: "login-form-auth.appspot.com",
  messagingSenderId: "672395625795",
  appId: "1:672395625795:web:e2252b0e2894e4d3039bf6"
})

export const auth = app.auth()
export default app