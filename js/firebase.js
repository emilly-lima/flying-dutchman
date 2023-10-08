(function () {
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpp2y48dnWUQDdjITKSWt6-T5uA5pk-Cw",
    authDomain: "flying-dutchman-c9696.firebaseapp.com",
    databaseURL: "https://flying-dutchman-c9696-default-rtdb.firebaseio.com",
    projectId: "flying-dutchman-c9696",
    storageBucket: "flying-dutchman-c9696.appspot.com",
    messagingSenderId: "99384263714",
    appId: "1:99384263714:web:bd6106f2e519cb9e2c767b",
    measurementId: "G-MTM0X906BB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

})()


