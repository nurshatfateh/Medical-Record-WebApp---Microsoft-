function check() {
  var id1 = "admin";
  var pass1 = "admin";
  var id2 = document.getElementById("id").value;
  var pass2 = document.getElementById("pass").value;
  // If password not entered
  if (pass1 != pass2 || id1 != id2) {
    document.getElementById("id").value = "";
    document.getElementById("pass").value = "";
    alert("Access Denied");
  } else {
    document.getElementById("id").value = "";
    document.getElementById("pass").value = "";
    flag = true;
    location.href = "home.html";
  }
}

// Function that takes in user input from 
// the text areas and adds them as
// a medical record to the homepage.
function addRecord() {
  var date = document.getElementById("date").value;
  var doctorName = document.getElementById("docName").value;

  if (date != "" && doctorName != "") {
      // Returns a random integer from 0 to 9:
      let id = Math.floor(Math.random() * 10);
      var currRecords;
      currRecords =  "<a href=\"details.html\" style=\"text-decoration: none\"" +
      "class=\"text-dark \"> <div class=\"card-body bg-white\" data-aos=\"zoom-in\">" +
        "<div class=\"p-3 mt-2 mb-2 border bg-white border-primary\">" +
          "<h4 class=\"mb-3\">Record ID: " + id + "</h4>" +
          "<h6 class=\"d-inline-block\">Date: "  + date + "</h6>" +
          "<br><h6 class=\"d-inline-block\">Doctor name: " + doctorName + "</h6></br></div></div></a>" + "\n";

      document.getElementById("rec123").innerHTML = document.getElementById("rec123").innerHTML + " " + currRecords;
  }
}

function addMedication() {
  var medication = document.getElementById("med").value;
  var detail = document.getElementById("details").value;

  if (medication != "" && detail != "") {
      // Returns a random integer from 0 to 9:
      let id = Math.floor(Math.random() * 10);
      var medications;
      medications =  "<a href=\"details.html\" style=\"text-decoration: none\"" +
      "class=\"text-dark \"> <div class=\"card-body bg-white\" data-aos=\"zoom-in\">" +
        "<div class=\"p-3 mt-2 mb-2 border bg-white border-primary\">" +
          "<h4 class=\"mb-3\">Record ID: " + id + "</h4>" +
          "<h6 class=\"d-inline-block\">Name of Medication: "  + medication + "</h6>" +
          "<br><h6 class=\"d-inline-block\">Details about medication on it should be used:  " + detail + "</h6></br></div></div></a>" + "\n";

      document.getElementById("rec1234").innerHTML = document.getElementById("rec1234").innerHTML + " " + medications;
  }
}
// // Invoked when navigting from profile to
// // home page so that we could update records when the homepage loads.
// // The window.onload functions waits until the homepage loads.
// window.onload = function updateRecords() {
//   document.getElementById("rec123").innerHTML = currRecords;
// }
