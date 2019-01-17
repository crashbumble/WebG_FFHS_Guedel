/*Bei Eingabe einer Mail*/
function setEmail() {
	var email = document.getElementsByName("Mail")[0].value;
	var thisDiv = document.getElementById("errorMail");
	removeError(thisDiv);
	if (email != "") {
		if (checkEmail(email) == false) {
			setErrorMail(email, thisDiv);
		}
	}
}

//Überprüft, ob Eingabe dem Muster einer Mail entspricht
function checkEmail(email) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email)) {
		return false;		
	}
	return true;
}

//Erzeugt Warnung
function setErrorMail(email, thisDiv) {
	var newLabel = document.createElement("p");
	var labelText = document.createTextNode("\""+email+"\""+
	" is not a valid e-mail address.");
	newLabel.appendChild(labelText);
	thisDiv.appendChild(newLabel);
}

/*Bei Eingabe in die Textarea*/
function setText() {
	var text = document.getElementsByName("Text")[0].value;
	var thisDiv = document.getElementById("errorText");
	removeError(thisDiv);
	if (text.length < 50 && text != "") {
		setErrorText(thisDiv);
	}
}

//Erzeugt Warnung
function setErrorText(thisDiv) {
	var newLabel = document.createElement("p");
	var labelText = document.createTextNode("The textbox needs at least 50 signs.");
	newLabel.appendChild(labelText);
	thisDiv.appendChild(newLabel);
}

/*Entfernt Warnung (Funktion wird für Mail & Text verwendet)*/
function removeError(thisDiv) {
	while (thisDiv.hasChildNodes()) {
    		thisDiv.removeChild(thisDiv.lastChild);
	}
}

/*Aktualisiert Status-Balken (bei 100% erscheint Send-Button)*/
function statusForm() {
	var status = 0;
	//Auswahl für Pizza getroffen?
	var x = document.getElementsByName("pizzaRating");
	if (radioCheck(x) == true) {
		status += 20;
	}
	//Auswahl für Prize getroffen?
	var x = document.getElementsByName("prizeRating");
	if (radioCheck(x) == true) {
		status += 20;
	}
	//Ist dieses Feld nicht leer?
	var x = document.getElementsByName("User")[0].value;
	if (x != "") {
		status += 20;
	}
	//Wurde eine gültige Mail eingetragen?
	var x = "Mail";
	if (testInput(x) == true) {
		status += 20;
	}
	//Wurde ein gültiger Text eingetragen?
	var x = "Text";
	if (testInput(x) == true) {
		status += 20;
	}
	if (status == 100) {
		$("#send_button").show();
		$(".progress").hide()
		
	} else {
		$("#send_button").hide();
		$(".progress").show();
		$(".progress-bar").css("width", status + "%");
	}
}

//Wurde eine Auswahl getroffen?
function radioCheck(x) {
	for (i=0; i<x.length; i++) {
		if (x[i].checked == true) {
			return true;
		}
	}
	return false;
}

//Ist keine Fehlermeldung vorhanden?
function testInput(x) {
	var thisDiv = document.getElementById("error" + x);
	if (thisDiv.hasChildNodes() == false) {
		var test = document.getElementsByName(x)[0].value;
		return (test != "");
	}
	return false;
}