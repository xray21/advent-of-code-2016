const crypto = require("crypto");

const input = "uqwqemis";
const testInput = "abc";
const compStr = "00000";

const part1 = () => {
	var password = "";
	
	for(i=0; i<Number.MAX_SAFE_INTEGER; i++){
		var hashStr = crypto.createHash("md5").update(input + i).digest("hex")
		
		if(hashStr.substr(0, 5) === compStr){
			password += hashStr.charAt(5);
			
			if(password.length >= 8){
				break;
			}
		}
	}
	
	console.log(password);
	
	return password;
}

const part2 = () => {
	const posCharIdx = 5;
	const valCharIdx = 6;
	const maxLength = 8;
	const dummyChar = "_"
	var password = ["_","_","_","_","_","_","_","_"];
	
	for(i=0; i<Number.MAX_SAFE_INTEGER; i++){
		var hashStr = crypto.createHash("md5").update(input + i).digest("hex")
		
		if(hashStr.substr(0, 5) === compStr){
			var curPosChar = hashStr.charAt(posCharIdx)
			var curPosIdx = parseInt(curPosChar, 16)
			var curValChar = hashStr.charAt(valCharIdx)
			
			if(curPosIdx < maxLength && password[curPosIdx] == dummyChar){
				password[curPosIdx] = curValChar;
			}
			
			console.log(hashStr, "pos: " + curPosChar, "val: " + curValChar, "curPassword: " + password.join(""));
			
			if(password.findIndex(c => c == dummyChar) == -1){
				break;
			}
		}
	}
	
	console.log(password.join(""));
	
	return password;
}

part1();
part2();