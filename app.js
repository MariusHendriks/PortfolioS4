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

var allData = [];
var uxuData = [];
var devData = [];
var ptmData = [];
db.collection("documents")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var entry = [];
      if (doc.data().course == "uxu") {
        entry.push(doc.data().course);
        entry.push(doc.data().link);
        entry.push(doc.data().name);
        uxuData.push(entry);
      }
      if (doc.data().course == "dev") {
        entry.push(doc.data().course);
        entry.push(doc.data().link);
        entry.push(doc.data().name);
        devData.push(entry);
      }
      if (doc.data().course == "ptm") {
        entry.push(doc.data().course);
        entry.push(doc.data().link);
        entry.push(doc.data().name);
        ptmData.push(entry);
      }

      console.log(uxuData);
    });
    allData.push(uxuData);
    allData.push(ptmData);
    allData.push(devData);
    console.log(allData);
  });
