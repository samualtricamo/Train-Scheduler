$document.ready(function() {


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCPKj4DmerLEbeMO2YOCnVtbNUs3GLfPow",
    authDomain: "activity-11-3d572.firebaseapp.com",
    databaseURL: "https://activity-11-3d572.firebaseio.com",
    projectId: "activity-11-3d572",
    storageBucket: "",
    messagingSenderId: "372664582740",
    appId: "1:372664582740:web:2d3ce8868717df5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();
  $("#submit-btn").on("click", function(event) {
      event.preventDefault();

var name = $("#name").val().trim();
var destination = $("#destination").val().trim();
var firstTrain = $("#firstTrain").val().trim();
var frequency = $("#frequency").val().trim();

$("#name").val("");
$("#destination").val("");
$("#firstTrain").val("");
$("#frequency").val("");

dataRef.ref().push({
    name: name,
    destination: destination,
    time: firstTrain,
    frequency: frequency
});
});

dataRef.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

var name = childSnapshot.val().name;
var destination = childsnapshot.val().destination;
var frequency = childSnapshot.val().frequency;
var time = childSnapshot.val().time;
var key = childSnapshot.val().key;



var currentTime = moment();
console.log("Current Time: " + moment(currentTime).format("hh:mm"));

$("#currentTime").html("Current Time: " + moment(currentTime).format("hh:mm"));

var timeDiff = moment().diff(moment(firstTrainConverted), "minutes");

var timeRemainder = timeDiff % frequency;

var nextTrainMin = frequency - timeRemainder;

var nextTrainAdd = moment().add(nextTrainMin, "minutes");
var nextTrainArr = moment(nextTrainAdd).format("hh:mm");

$("#schedule").prepend("<tr><td>") + name + "</td><td>" + destination + "</td><td>" + frequency + "/td><td>" + nextTrainArr + "</td><td>" +nextTrainMin + "</td><td>"

},

function(err) {});

});
