function shoutOut(sauce){
	var upperSauce = sauce.toUpperCase();
	var saucespace = "";

	for(i = 0; i < upperSauce.length; i++){
		saucespace += upperSauce[i];

		if(sauce.length > i + 1){
			saucespace += " ";
		}
	}
	
	for(j=1; j < upperSauce.length; j++){
		saucespace += ("\n" + upperSauce[j]);
	}

	alert(saucespace);
	return false;
}

function triangleDiagonal(sauce){
	var upperSauce = sauce.toUpperCase();
	var saucespace = "";

	for(i = 0; i < upperSauce.length; i++){
		saucespace += upperSauce[i];

		if(sauce.length > i + 1){
			saucespace += " ";
		}
	}

	var spaceOffset = 1;
	
	for(j=1; j < upperSauce.length; j++){
		saucespace += ("\n" + upperSauce[j]);
		saucespace += (returnSpaces(spaceOffset) + upperSauce[j]);
		
		spaceOffset += 2;
	}

	alert(saucespace);
	return false;
}

function upperLeftTriangle(sauce){
	var upperSauce = sauce.toUpperCase();
	var saucespace = "";

	for(i = 0; i < upperSauce.length; i++){
		saucespace += upperSauce[i];

		if(sauce.length > i + 1){
			saucespace += " ";
		}
	}

	saucespace += "\n";
	var substr = saucespace;

	for(j = 0; j <= saucespace.length; j++){
		substr += (saucespace.substring( (j*2) + 2, saucespace.length - 1) + "\n");
	}
	
	console.log(substr);
	return false;
}


function returnSpaces(quantity){
	var returnSpaces = "";

	while(quantity > 0){
		returnSpaces += " ";
		quantity--;
	}

	return returnSpaces;
}