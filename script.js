function convert() {
	const value = document.getElementById("value").value;
	const from = document.getElementById("from").value;
	const to = document.getElementById("to").value;
	let result;
	if(from === "m" && to === "km") {
		result = value / 1000;
	} else if(from === "km" && to === "m") {
		result = value * 1000;
	} else if(from === "m" && to === "ft") {
		result = value * 3.28084;
	} else if(from === "ft" && to === "m") {
		result = value / 3.28084;
	} else if(from === "km" && to === "mi") {
		result = value / 1.609344;
	} else if(from === "mi" && to === "km") {
		result = value * 1.609344;
	} else if(from === "ft" && to === "mi") {
		result = value / 5280;
	} else if(from === "mi" && to === "ft") {
		result = value * 5280;
	} else {
		result = value;
	}
	document.getElementById("result").innerHTML = `Result: ${value} ${from} is ${result} ${to}`;
}

function reset() {
	document.getElementById("result").innerHTML = "Result:";
	document.getElementById("value").value = " ";
}
