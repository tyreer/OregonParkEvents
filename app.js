'use strict'

document.getElementById("getdata").addEventListener("click", makeAJAXRequest)

function makeAJAXRequest () {
    
    var request = new XMLHttpRequest();
    var url = "http://oregonstateparks.org/data/index.cfm/parkEvents?descr=";
     
    request.addEventListener("load", writeResponse);
    
    request.open("GET", url + document.getElementById("query").value);
    request.send();
}

function writeResponse() {
    var response;
    var htmlString = "";
    
    response = JSON.parse(this.responseText);
    
    console.log(response);
    
    for (var i = 0; i < response.length; i++) {
        htmlString += "<h3 style='color: blue'>" + response[i].title + "</h3>";
        htmlString += "<p><b>Start time:</b> " + response[i].event_start + "</p>";
        htmlString += "<p><b>Park name:</b> " + response[i].park_name + "</p>";
        htmlString += "<p><b>Location:</b> " + response[i].event_location + "</p>";
        htmlString += "<p>" + response[i].event_description + "</p>";
    }
    
    document.getElementById("results").innerHTML = htmlString;
}
