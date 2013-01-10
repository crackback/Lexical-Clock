var refresh = function(){
	// shuts all elements off
	var allIds = ["half", "tenMod","quarter", "twenty", "fiveMod", "minutes", "to", "past", "one", "three", "two", "four", "five", 
		    "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "oclock"]; 
	for ( var i = 0; i < 21; i++){
		document.getElementById(allIds[i]).style.color="#303030";
	}
}

var update = function() {
	// initialise screen
	var on = "white";
	var off = "#303030";
	document.getElementById("its").style.color=on;
	refresh();

	// initialise date variables
	current = new Date();
	var hour = current.getHours();
	if (hour > 12) {hour -= 12};
	var minutes = current.getMinutes();
	
	// set modifier
	if (minutes < 3){
		document.getElementById("oclock").style.color=on;
	}else if (minutes < 33){
		document.getElementById("past").style.color=on;
		document.getElementById("minutes").style.color=on;
	}else if (minutes <= 57){
		document.getElementById("to").style.color=on;
		document.getElementById("minutes").style.color=on;
		hour === 12 ? hour = 1: hour += 1;
		minutes = 60 - minutes;
	}else{
		document.getElementById("oclock").style.color=on;
		hour === 12 ? hour = 1: hour += 1;
		minutes = 60 - minutes;
	}

	//set minutes
	if (minutes >= 3){
	       if(minutes < 7){
			document.getElementById("fiveMod").style.color=on;
		}else if (minutes < 13){
			document.getElementById("tenMod").style.color=on;
		}else if (minutes < 17){
			document.getElementById("quarter").style.color=on;
			document.getElementById("minutes").style.color=off;
		}else if (minutes < 23){
			document.getElementById("twenty").style.color=on;
		}else if (minutes < 27){
			document.getElementById("twenty").style.color=on;
			document.getElementById("fiveMod").style.color=on;
		}else if (minutes < 33){
			document.getElementById("half").style.color=on;
			document.getElementById("minutes").style.color=off;
		}
	}

	//set hours
	switch (hour){
		case 1 :
			document.getElementById("one").style.color=on;
			break;
		case 2 :
			document.getElementById("two").style.color=on;
			break;
		case 3 :
			document.getElementById("three").style.color=on;
			break;
		case 4 :
			document.getElementById("four").style.color=on;
			break;
		case 5 :
			document.getElementById("five").style.color=on;
			break;
		case 6 :
			document.getElementById("six").style.color=on;
			break;
		case 7 :
			document.getElementById("seven").style.color=on;
			break;
		case 8 :
			document.getElementById("eight").style.color=on;
			break;
		case 9 :
			document.getElementById("nine").style.color=on;
			break;
		case 10 :
			document.getElementById("ten").style.color=on;
			break;
		case 11 :
			document.getElementById("eleven").style.color=on;
			break;
		case 12 :
			document.getElementById("twelve").style.color=on;
			break;
	}
}

// run update on load and repeat every 30 seconds afterwards
onload = update;
setInterval(update,30000);
