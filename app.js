// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmLt6NHwBPbb8qqM1zZ5M1Ot1NA1NrsjU",
  authDomain: "portfolio-s4.firebaseapp.com",
  databaseURL: "https://portfolio-s4.firebaseio.com",
  projectId: "portfolio-s4",
  storageBucket: "portfolio-s4.appspot.com",
  messagingSenderId: "260795564683"
};
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);

var db = firebase.firestore();

db.collection("documents")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      
    });
  });
