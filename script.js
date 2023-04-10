//your JS code here. If required.
const input = prompt("Enter a string");
for(var i = 0; i < input.length; i++){
	var restInput = input.substring(0, i) + input.substring((i + 1), input.length);
	if(!restInput.includes(input.charAt(i))) return input.charAt(i);
}
