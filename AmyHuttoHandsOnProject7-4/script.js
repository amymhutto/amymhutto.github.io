/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-4

      Author: Amy Hutto
      Date:   5-18-2018

      Filename: script.js
   */

"use strict";

var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');

function processDeliveryInfo() {
    var prop;
    delivInfo.name = document.getElementById("nameinput").value  
    delivInfo.addr = document.getElementById("addrinput").value
    delivInfo.city = document.getElementById("cityinput").value
    delivInfo.email = document.getElementById("emailinput").value
    delivInfo.phone = document.getElementById("phoneinput").value
    
	for (prop in delivInfo){
       delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
 }

function previewOrder() {
	processDeliveryInfo()
	document.getElementById("section").style.display = "block";
}


 function createEventListeners() {
    var previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
       previewButton.addEventListener("click", previewOrder, false);
    } 
    else if (previewButton.attachEvent) {
    previewButton.attachEvent("onclick", previewOrder);
    }
  }

  if (window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
}
 else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners)
}