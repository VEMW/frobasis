"use strict";

// Declare variables
const studentName = "Valerie Wilsoe";
const studentGroup = "MD2B";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
    main.addContentItem("Inleiding", intro);
    main.addContentItem("Variabelen", intro);

    // Activate the first navigation link
    intro();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "400px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Brendan Eich";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);

    // Add the paragraph to the DOM
    element.appendChild(p);
}

function variabeles(){
	var poscode = "1234AB";
	var huisnummer = 99;
	var datum = "2018-01-01";
	var gas = 300;
	var water = 30;
	var electriciteit = [1001, 1002];
	var slimmeMeter = true;

  var result = "Voor poscode " + poscode + " en huisnummer " + 99 + " zijn op " + datum + " metingen gedaan en dit zijn de resultaten: gas=" + gas + ", water=" + water + ", electriciteitHoog=" +
electriciteit[0] + ", electriciteitLaag=" + electriciteit[1] + ". Dit is allemaal gedaan met een slimme meter";
main.updateContent("Variabelen", result);
}


function object(){}

function array(){
var object1 = {
  poscode: "1234AB",
  huisnummer: 99,
  datum: "2018-01-01",
  gas: 300,
  water: 30,
  electriciteit: [1001, 1002],
  slimmeMeter: true
};

var object2 = {
  poscode: "1234AB",
  huisnummer: 45,
  datum: "2018-01-01",
  gas: 1300,
  water: 130,
  electriciteit: [11001, 11002],
  slimmeMeter: false
};


//var legeArray = [object1, object2]
}


function ajax(){

}
