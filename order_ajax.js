function order(name, type, option){
	var xhr = new XMLHttpRequest();
	var url = "https://tonyspizzafactory.herokuapp.com/api/orders";
	xhr.open("POST", url, true);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4 && xhr.status==201) {
			confirmOrder(name, type, option);
		};
	}
	xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send(setOrder(name, type));

}

function setOrder(name, type) {
		if(type == "pizza") {
			var idnumber = 0;
		}
		else if(type == "softdrink") {
			var idnumber = 1;
		}
		else if(type == "salad") {
			var idnumber = 2;
		}
		
		var bestellung = {
		"id" : idnumber,
		"type" : type,
		"name": name
		};
		return JSON.stringify(bestellung);
	}


function confirmOrder(name, type, option) {

	//Bestellbestätigung für Pizzas
	
	if (option == 0) {
				alert("Your order for a pizza " + name + " has arrived!");
		}
	
	//Bestellbestätigung für Softdrinks
	
	if (type == "softdrink") {	
		if (option == 1) {
		
			var selection = document.getElementById("softdrinkselection1");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " " + auswahl + " has arrived!");
		}	
		
		else if (option == 2) {
		
			var selection = document.getElementById("softdrinkselection2");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " " + auswahl + " has arrived!");
		}	
		
		else if (option == 3) {
		
			var selection = document.getElementById("softdrinkselection3");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " " + auswahl + " has arrived!");
		}	
		
		else if (option == 4) {
		
			var selection = document.getElementById("softdrinkselection4");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " " + auswahl + " has arrived!");
		}	
	}
	// Bestellbestätigung für Salate
	
	else if (type == "salad") {	
		if (option == 1) {
		
			var selection = document.getElementById("saladselection1");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " with " + auswahl + " has arrived!");
		}	
		
		else if (option == 2) {
		
			var selection = document.getElementById("saladselection2");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " with " + auswahl + " has arrived!");
		}	
		
		else if (option == 3) {
		
			var selection = document.getElementById("saladselection3");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " with " + auswahl + " has arrived");
		}	
		
		else if (option == 4) {
		
			var selection = document.getElementById("saladselection4");
			var auswahl = selection.options[selection.selectedIndex].text;
			alert("Your order for a " + name + " with " + auswahl + " has arrived!");
		}	
	} 
}