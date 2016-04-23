// Name: Matt Pagnan
// Student #: 1208693
// macid: pagnanmm
var equation = "";			// Variable used to hold the actul equation
var readyForReset = false;

function updateDisplay(inValue){

	if(readyForReset){	// if we press equals before this
		displayReset();
		readyForReset = false;
	}
	
	if(equation.length == 25){// Max string Length
		document.getElementById("resultLabel").innerHTML = "Max input";
		return;
	}

	equation += inValue;
	
	switch (inValue){	// change certain input character to look different than what is put into the equation
		case '/':
			document.getElementById("displayLabel").innerHTML += '&divide';
			break;
			
		case '*':
			document.getElementById("displayLabel").innerHTML += '&times';
			break;

		default:
			document.getElementById("displayLabel").innerHTML += inValue;
			
	}
}

function updateDisplay2(inValue){
	var value, outValue;
	switch(inValue){
		case 'sin':
			value = document.getElementById("sinEntry").value;
			outValue = Math.round((Math.sin(value * (Math.PI/180))*100))/100;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			document.getElementById("sinRes").innerHTML = outValue;
			
			break;
			
		case 'cos':
			value = document.getElementById("cosEntry").value;
			outValue = Math.round((Math.cos(value * (Math.PI/180))*100))/100;
			console.log(outValue);
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			document.getElementById("cosRes").innerHTML = outValue;
			break;
			
		case 'log':
			value = document.getElementById("logEntry").value;
			outValue = Math.round(Math.log(value)*100)/100;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			document.getElementById("logRes").innerHTML = outValue;
			break;
			
		case 'sqrt':
			value = document.getElementById("sqrtEntry").value;
			outValue = Math.round(Math.sqrt(value)*100)/100;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			document.getElementById("sqrtRes").innerHTML = outValue;
			break;
	}
}


function displayReset(){
	document.getElementById("resultLabel").innerHTML = "&nbsp;";
	document.getElementById("displayLabel").innerHTML = "";
	equation = "";
	preEquation = "";
}

function deleteOne(){
	var dispText = document.getElementById("displayLabel").innerHTML;
	
	document.getElementById("displayLabel").innerHTML = dispText.substring(0, dispText.length -1);
	equation = equation.substring(0, equation.length -1);
}

function evalDisplay(){
	var dispText = document.getElementById("displayLabel").innerHTML;
	
	firstChar = equation.charAt(0);
	lastChar = equation.charAt(equation.length -1);
	
	if("e*/".indexOf(firstChar) != -1 || "e*/+-".indexOf(lastChar) != -1){// bad leading Character
		document.getElementById("resultLabel").innerHTML = "Syntax Error";
	}
	else{	
		if(eval(equation) == "Infinity"){
			document.getElementById("resultLabel").innerHTML = "Math error";
		}
		else{
			document.getElementById("resultLabel").innerHTML = eval(equation);
		}
		readyForReset = true;	// next input clears display
	}
}

function sciMode(){
	var rowTwo = document.getElementById("calcTable").rows[1];
	var rowThree = document.getElementById("calcTable").rows[2];
	var rowFour = document.getElementById("calcTable").rows[3];
	var rowFive = document.getElementById("calcTable").rows[4];

	// Change Sci button to CONV
	var modeBtn = document.getElementById("modeBtn");
	modeBtn.value = "CONV";
	modeBtn.removeAttribute('onclick');
	modeBtn.addEventListener("click", function(){convMode();});
	
	///////////// Buttons column //////////////////
	var sinCell = rowTwo.insertCell(-1);
	var sinBtn = document.createElement("input");
	sinBtn.type = "button";
	sinBtn.value = "sin";
	sinBtn.className = "calcButton";
	sinBtn.addEventListener("click", function(){updateDisplay2('sin');});
	sinCell.appendChild(sinBtn);
	
	var cosCell = rowThree.insertCell(-1);
	var cosBtn = document.createElement("input");
	cosBtn.type = "button";
	cosBtn.value = "cos";
	cosBtn.className = "calcButton";
	cosBtn.addEventListener("click", function(){updateDisplay2('cos');});
	cosCell.appendChild(cosBtn);
	
	var logCell = rowFour.insertCell(-1);
	var logBtn = document.createElement("input");
	logBtn.type = "button";
	logBtn.value = "log";
	logBtn.className = "calcButton";
	logBtn.addEventListener("click", function(){updateDisplay2('log');});
	logCell.appendChild(logBtn);
	
	var sqrtCell = rowFive.insertCell(-1);
	var sqrtBtn = document.createElement("input");
	sqrtBtn.type = "button";
	sqrtBtn.value = "\u221A";
	sqrtBtn.className = "calcButton";
	sqrtBtn.addEventListener("click", function(){updateDisplay2('sqrt');});
	sqrtCell.appendChild(sqrtBtn);
	
	//////////////// Entry Column ///////////////////
	var sinCell2 = rowTwo.insertCell(-1);
	var sinEntry = document.createElement("input");
	sinEntry.id = "sinEntry";
	sinEntry.type = "text";
	sinEntry.size = "4";
	sinCell2.appendChild(sinEntry);
	
	var cosCell2 = rowThree.insertCell(-1);
	var cosEntry = document.createElement("input");
	cosEntry.id = "cosEntry";
	cosEntry.type = "text";
	cosEntry.size = "4";
	cosCell2.appendChild(cosEntry);
	
	var logCell2 = rowFour.insertCell(-1);
	var logEntry = document.createElement("input");
	logEntry.id = "logEntry";
	logEntry.type = "text";
	logEntry.size = "4";
	logCell2.appendChild(logEntry);
	
	var sqrtCell2 = rowFive.insertCell(-1);
	var sqrtEntry = document.createElement("input"); 
	sqrtEntry.id = "sqrtEntry";
	sqrtEntry.type = "text";
	sqrtEntry.size = "4";
	sqrtCell2.appendChild(sqrtEntry);
	
	////////////// Equals Column ////////////////
	var sinEq = rowTwo.insertCell(-1);
	sinEq.innerHTML = "deg =";
	sinEq.className = "cellCenter";
	
	var cosEq = rowThree.insertCell(-1);
	cosEq.innerHTML = "deg =";
	cosEq.className = "cellCenter";
	
	var logEq = rowFour.insertCell(-1);
	logEq.innerHTML = " = ";
	logEq.className = "cellCenter";
	
	var sqrtEq = rowFive.insertCell(-1);
	sqrtEq.innerHTML = " = ";
	sqrtEq.className = "cellCenter";
	
	////////////// Results Column ///////////////
	var sinRes = rowTwo.insertCell(-1);
	sinRes.id = "sinRes";
	var cosRes = rowThree.insertCell(-1);
	cosRes.id = "cosRes";
	var logRes = rowFour.insertCell(-1);
	logRes.id = "logRes";
	var sqrtRes = rowFive.insertCell(-1);
	sqrtRes.id = "sqrtRes";
}

function convMode(){
	var rowSix = document.getElementById('calcTable').insertRow(-1);
	
	// Change CONV button to STAND
	var modeBtn = document.getElementById("modeBtn");
	modeBtn.value = "STAND";
	modeBtn.addEventListener("click", function(){window.location="calculator.html";});// just reload the page, lol
	
	// Selection box
	var selectCell = rowSix.insertCell(0);
	selectCell.colSpan = "5";
	selectCell.className = "cellCenter";
	
	var selectList = document.createElement("select");
	selectList.id = "selectList";
	
	var option = document.createElement("option");
	option.value = "Km_to_m";
	option.text = "Kilometers to meters, meters to kilometers";
	selectList.appendChild(option);
	
	option = document.createElement("option");
	option.value = "M_to_s";
	option.text = "Minutes to seconds, seconds to minutes";
	selectList.appendChild(option);
	
	option = document.createElement("option");
	option.value = "Kg_to_g";
	option.text = "Kilograms to grams, grams to kilograms";
	selectList.appendChild(option);
	selectList.addEventListener('change', function(){changeLabels(selectList.options[selectList.selectedIndex].value);});
	
	selectCell.appendChild(selectList);
	
	// input Box1
	var input1Cell = rowSix.insertCell(-1);
	var input1Entry = document.createElement("input");
	input1Entry.id = "input1Entry";
	input1Entry.type = "text";
	input1Entry.size = "4";
	input1Entry.addEventListener('keyup', function(){convert(unit1Cell.innerHTML);});
	input1Cell.appendChild(input1Entry);
	
	// UnitLabel1
	var unit1Cell = rowSix.insertCell(-1);
	unit1Cell.id = "unit1Cell";
	unit1Cell.innerHTML = "Km";
	
	// input Box2
	var input2Cell = rowSix.insertCell(-1);
	var input2Entry = document.createElement("input");
	input2Entry.id = "input2Entry";
	input2Entry.type = "text";
	input2Entry.size = "4";
	input2Cell.addEventListener('keyup', function(){convert(unit2Cell.innerHTML);});
	input2Cell.appendChild(input2Entry);
	
	// Unit Label2
	var unit2Cell = rowSix.insertCell(-1);
	unit2Cell.id = "unit2Cell";
	unit2Cell.innerHTML = "m";
}

function convert(units){
	var entry1 = document.getElementById('input1Entry');
	var entry2 = document.getElementById('input2Entry');
	var outValue;
	switch(units){
		case 'Km':
			outValue = entry1.value*1000;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry2.value = outValue;
			break;
			
		case 'm':
			outValue = entry2.value/1000;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry1.value = outValue;
			break;
			
		case 'M':
			outValue = entry1.value*60;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry2.value = outValue;
			break;
			
		case 's':
			outValue = entry2.value/60;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry1.value = outValue;
			break;
			
		case 'Kg':
			outValue = entry1.value*1000;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry2.value = outValue;
			break;
			
		case 'g':
			outValue = entry2.value/1000;
			if(isNaN(outValue)){
				outValue = "Syntax Error";
			}
			entry1.value = outValue;
			break;
	}
}

function changeLabels(value){
	var unit1Cell = document.getElementById("unit1Cell");
	var unit2Cell = document.getElementById("unit2Cell");
	switch(value){
		case 'Km_to_m':
			unit1Cell.innerHTML = "Km";
			unit2Cell.innerHTML = 'm';
			break;
		
		case 'M_to_s':
			unit1Cell.innerHTML = "M";
			unit2Cell.innerHTML = "s";
			break;
		
		case 'Kg_to_g':
			unit1Cell.innerHTML = "Kg";
			unit2Cell.innerHTML = "g";
			break;
	
	}
	
	// Clear the input boxes
	document.getElementById("input1Entry").value = "";
	document.getElementById("input2Entry").value = "";
}



