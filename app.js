'use strict'

document.getElementById("getdata").addEventListener("click", makeAJAXRequest)

function makeAJAXRequest () {

    let request = new XMLHttpRequest();
    let url = "//oregonstateparks.org/data/index.cfm/parkEvents?descr=";

    request.addEventListener("load", writeResponse);

    request.open("GET", url + document.getElementById("query").value);
    request.send();
}

function writeResponse() {
    let response;
    let htmlString = "";

    response = JSON.parse(this.responseText);

    for (let i = 0; i < response.length; i++) {
        htmlString += "<h3 style='color: blue'>" + response[i].title + "</h3>";
        htmlString += "<p><b>Start time:</b> " + response[i].event_start + "</p>";
        htmlString += "<p><b>Park name:</b> " + response[i].park_name + "</p>";
        htmlString += "<p><b>Location:</b> " + response[i].event_location + "</p>";
        htmlString += "<p>" + response[i].event_description + "</p>";
    }

    document.getElementById("results").innerHTML = htmlString;
}

if (Modernizr.inputtypes.date) {
  let calendarDiv = document.createElement("div");
  calendarDiv.innerHTML="<label>Choose a date <input type='date'></label>";
  document.getElementById("header").appendChild(calendarDiv);
} else {
  console.log('Input type date NOT supported');
}
