
var update = function() {
	
	// initialise screen
	// selects all elements with class on and removes it
	$('.on').removeClass("on");
	$("#its").addClass('on');

	// initialise date variables
	current = new Date();
	var hour = current.getHours();
	if (hour > 12) {hour -= 12};
	var minutes = current.getMinutes();
	
	// set modifier
	if (minutes < 3){
		$("#oclock").addClass('on');
	}else if (minutes < 33){
		$("#past").addClass('on');
		$("#minutes").addClass('on');
	}else if (minutes <= 57){
		$("#to").addClass('on');
		$("#minutes").addClass('on');
		hour === 12 ? hour = 1: hour += 1;
		minutes = 60 - minutes;
	}else{
		$("#oclock").addClass('on');
		hour === 12 ? hour = 1: hour += 1;
		minutes = 60 - minutes;
	}

	//set minutes
	if (minutes >= 3){
	       if(minutes < 7){
			$("#fiveMod").addClass('on');
		}else if (minutes < 13){
			$("#tenMod").addClass('on');
		}else if (minutes < 17){
			$("#quarter").addClass('on');
			$("#minutes").removeClass('on');
		}else if (minutes < 23){
			$("#twenty").addClass('on');
		}else if (minutes < 27){
			$("#twenty").addClass('on');
			$("#fiveMod").addClass('on');
		}else if (minutes < 33){
			$("#half").addClass('on');
			$("#minutes").removeClass('on');
		}
	}

	//set hours
	switch (hour){
		case 1 :
			$("#one").addClass('on');
			break;
		case 2 :
			$("#two").addClass('on');
			break;
		case 3 :
			$("#three").addClass('on');
			break;
		case 4 :
			$("#four").addClass('on');
			break;
		case 5 :
			$("#five").addClass('on');
			break;
		case 6 :
			$("#six").addClass('on');
			break;
		case 7 :
			$("#seven").addClass('on');
			break;
		case 8 :
			$("#eight").addClass('on');
			break;
		case 9 :
			$("#nine").addClass('on');
			break;
		case 10 :
			$("#ten").addClass('on');
			break;
		case 11 :
			$("#eleven").addClass('on');
			break;
		case 12 :
			$("#twelve").addClass('on');
			break;
	}

}

// run update on load and repeat every 30 seconds afterwards
$(document).ready(function(){
	update();
	setInterval(update,30000);
});
