function bookingCalcDisplay (form) {
	 var fullName = form.fullName.value;
	 var destinationCity = form.destinationCity.value;
	 var nationality = form.nationality.value;
	 var daysTraveling = form.daysTraveling.value;
	 var firstClasstravel = form.firstClasstravel.checked;
	 var spouseTraveling = form.spouseTraveling.checked;
	 var resultsDIVtochange = document.getElementById("results"); 

	 resultsDIVtochange.innerHTML = "Hi, " + fullName + " your traveling to " + destinationCity + " and your booking cost is " + costOfbooking(destinationCity,daysTraveling,firstClasstravel,spouseTraveling) + " dollars. " + passportNeeded(destinationCity,nationality);    
}

function costOfbooking (destinationCity,daysTraveling,firstClasstravel,spouseTraveling) {
	var dayCostforMiamiandMeixco = 200;
	var dayCostforNewYorkandLosAngeles = 300;
	var totalCostforTrip = 0;
	var firstClasstravelCost = 400;
	var spouseTravelingmultiplier = 2;

	if (destinationCity === "Miami" || destinationCity === "Mexico City") {
		totalCostforTrip += daysTraveling * dayCostforMiamiandMeixco
	} else if (destinationCity === "New York" || destinationCity === "Los Angeles") {
		totalCostforTrip += daysTraveling * dayCostforNewYorkandLosAngeles
	} else {
		totalCostforTrip === null;
		return "ERROR! No city provided"
	};

	if (firstClasstravel === true) {
		totalCostforTrip += firstClasstravelCost; 
	};

	if (spouseTraveling === true) {
		totalCostforTrip *= spouseTravelingmultiplier; 
	};

	return totalCostforTrip;
	// Do error checking code in a catch block
};

function passportNeeded (destinationCity,nationality) {
	if (nationality === "Mexico" && destinationCity === "Mexico City") {
		return "You do not need a passport to travel here.";
	} else if (nationality !== "Mexico" && destinationCity === "Mexico City") {
		return "You are from " + nationality + " and are traveling to " + destinationCity + " so you will need to bring your passport!";
	} else {
		return "" ;
	};
};