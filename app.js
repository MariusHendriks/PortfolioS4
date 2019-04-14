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
var scoData = [];
doSomeShit();
async function getData() {
  db.collection("documents")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var entry = [];
        if (doc.data().course == "uxu") {
          entry.push(doc.data());
          uxuData.push(entry);
        } else if (doc.data().course == "dev") {
          entry.push(doc.data());
          devData.push(entry);
        } else if (doc.data().course == "ptm") {
          entry.push(doc.data());
          ptmData.push(entry);
        } else if (doc.data().course == "sco") {
          entry.push(doc.data());
          scoData.push(entry);
        } else {
          console.log("Error");
        }
      });
      allData.push(uxuData);
      allData.push(ptmData);
      allData.push(devData);
      allData.push(scoData);
      fillData();
      return;
    });
}
async function doSomeShit() {
  await getData();
}

function fillData() {
  for (i = 0; i < uxuData.length; i++) {
    $("#uxu").prepend("<li><a href='#'>" + uxuData[i][0].name + "</a></li>");
  }
  for (i = 0; i < ptmData.length; i++) {
    $("#ptm").prepend("<li><a href='#'>" + ptmData[i][0].name + "</a></li>");
  }
  for (i = 0; i < devData.length; i++) {
    $("#dev").prepend("<li><a href='#'>" + devData[i][0].name + "</a></li>");
  }
  for (i = 0; i < scoData.length; i++) {
    $("#sco").prepend("<li><a href='#'>" + scoData[i][0].name + "</a></li>");
  }
}
