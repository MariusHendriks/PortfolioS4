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
    link = uxuData[i][0].link;
    name = uxuData[i][0].name;
    console.log(uxuData[i][0].link);
    $("#uxu").prepend(
      "<li  class='listItem'><a onclick='updateIframe(\"" +
        link +
        "\")' href='#'>" +
        name +
        "</a></li>"
    );
  }
  for (i = 0; i < ptmData.length; i++) {
    link = ptmData[i][0].link;
    name = ptmData[i][0].name;
    console.log(ptmData[i][0].link);
    $("#ptm").prepend(
      "<li class='listItem'><a onclick='updateIframe(\"" +
        link +
        "\")' href='#'>" +
        name +
        "</a></li>"
    );
  }
  for (i = 0; i < devData.length; i++) {
    link = devData[i][0].link;
    name = devData[i][0].name;
    console.log(devData[i][0].link);
    $("#dev").prepend(
      "<li class='listItem'><a onclick='updateIframe(\"" +
        link +
        "\")' href='#'>" +
        name +
        "</a></li>"
    );
  }
  for (i = 0; i < scoData.length; i++) {
    link = scoData[i][0].link;
    name = scoData[i][0].name;
    console.log(scoData[i][0].link);
    $("#sco").prepend(
      "<li class='listItem'><a onclick='updateIframe(\"" +
        link +
        "\")' href='#'>" +
        name +
        "</a></li>"
    );
  }
}

function updateIframe(linkMid) {
  LinkStart = "https://docs.google.com/document/d/";
  LinkEnd = "/preview";
  newLink = LinkStart + linkMid + LinkEnd;
  console.log(newLink);
  document.getElementById("iFrame").src = newLink;
}
