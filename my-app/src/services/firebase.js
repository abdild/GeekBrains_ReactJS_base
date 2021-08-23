import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB88cc66KPu1RAJ7MX1WIEaMa0uetynr9w",
  authDomain: "gb-react-chat.firebaseapp.com",
  databaseURL: "https://gb-react-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-chat",
  storageBucket: "gb-react-chat.appspot.com",
  messagingSenderId: "47775560712",
  appId: "1:47775560712:web:d971e6610bd558aa610dbd",
  measurementId: "G-X1CTBJP1N8"
};

  export const initFB = () => firebase.initializeApp(firebaseConfig);
