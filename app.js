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

var docRef = db.collection("documents").doc("6CGSwq8mvQuhESTlKUIs");

var uxu = [];
var ded = [];
var ptm = [];
var sco = [];

db.collection("documents")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var data = [];
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
      UXU.set("test", doc.data);
      console.log(doc.id, " => ", doc.data());
      console.log("Pooop ", data);
      setArrays(data);
    });
  });

function setArrays(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    //maak object en neuk die in de db
    if (array[i].course == "uxu") {
      uxu.push(array[i].course);
    }
    console.log(array[i].course);
  }
}
