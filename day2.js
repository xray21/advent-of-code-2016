var AOC2 = {
	keypad1: [
		[1,2,3],
		[4,5,6],
		[7,8,9]
	],
	keypad2: [
		["_","_","1","_","_"],
		["_","2","3","4","_"],
		["5","6","7","8","9"],
		["_","A","B","C","_"],
		["_","_","D","_","_"]
	],
	testInput: [
		"ULL",
		"RRDDD",
		"LURDL",
		"UUUUD"
	],
	input: [
		"LURLDDLDULRURDUDLRULRDLLRURDUDRLLRLRURDRULDLRLRRDDULUDULURULLURLURRRLLDURURLLUURDLLDUUDRRDLDLLRUUDURURRULURUURLDLLLUDDUUDRULLRUDURRLRLLDRRUDULLDUUUDLDLRLLRLULDLRLUDLRRULDDDURLUULRDLRULRDURDURUUUDDRRDRRUDULDUUULLLLURRDDUULDRDRLULRRRUUDUURDULDDRLDRDLLDDLRDLDULUDDLULUDRLULRRRRUUUDULULDLUDUUUUDURLUDRDLLDDRULUURDRRRDRLDLLURLULDULRUDRDDUDDLRLRRDUDDRULRULULRDDDDRDLLLRURDDDDRDRUDUDUUDRUDLDULRUULLRRLURRRRUUDRDLDUDDLUDRRURLRDDLUUDUDUUDRLUURURRURDRRRURULUUDUUDURUUURDDDURUDLRLLULRULRDURLLDDULLDULULDDDRUDDDUUDDUDDRRRURRUURRRRURUDRRDLRDUUULLRRRUDD",
		"DLDUDULDLRDLUDDLLRLUUULLDURRUDLLDUDDRDRLRDDUUUURDULDULLRDRURDLULRUURRDLULUDRURDULLDRURUULLDLLUDRLUDRUDRURURUULRDLLDDDLRUDUDLUDURLDDLRRUUURDDDRLUDDDUDDLDUDDUUUUUULLRDRRUDRUDDDLLLDRDUULRLDURLLDURUDDLLURDDLULLDDDRLUDRDDLDLDLRLURRDURRRUDRRDUUDDRLLUDLDRLRDUDLDLRDRUDUUULULUDRRULUDRDRRLLDDRDDDLULURUURULLRRRRRDDRDDRRRDLRDURURRRDDULLUULRULURURDRRUDURDDUURDUURUURUULURUUDULURRDLRRUUDRLLDLDRRRULDRLLRLDUDULRRLDUDDUUURDUDLDDDUDL",
		"RURDRUDUUUUULLLUULDULLLDRUULURLDULULRDDLRLLRURULLLLLLRULLURRDLULLUULRRDURRURLUDLULDLRRULRDLDULLDDRRDLLRURRDULULDRRDDULDURRRUUURUDDURULUUDURUULUDLUURRLDLRDDUUUUURULDRDUDDULULRDRUUURRRDRLURRLUUULRUDRRLUDRDLDUDDRDRRUULLLLDUUUULDULRRRLLRLRLRULDLRURRLRLDLRRDRDRLDRUDDDUUDRLLUUURLRLULURLDRRULRULUDRUUURRUDLDDRRDDURUUULLDDLLDDRUDDDUULUDRDDLULDDDDRULDDDDUUUURRLDUURULRDDRDLLLRRDDURUDRRLDUDULRULDDLDDLDUUUULDLLULUUDDULUUDLRDRUDLURDULUDDRDRDRDDURDLURLULRUURDUDULDDLDDRUULLRDRLRRUURRDDRDUDDLRRLLDRDLUUDRRDDDUUUDLRRLDDDUDRURRDDUULUDLLLRUDDRULRLLLRDLUDUUUUURLRRUDUDDDDLRLLULLUDRDURDDULULRDRDLUDDRLURRLRRULRL",
		"LDUURLLULRUURRDLDRUULRDRDDDRULDLURDDRURULLRUURRLRRLDRURRDRLUDRUUUULLDRLURDRLRUDDRDDDUURRDRRURULLLDRDRDLDUURLDRUULLDRDDRRDRDUUDLURUDDLLUUDDULDDULRDDUUDDDLRLLLULLDLUDRRLDUUDRUUDUDUURULDRRLRRDLRLURDRURURRDURDURRUDLRURURUUDURURUDRURULLLLLUDRUDUDULRLLLRDRLLRLRLRRDULRUUULURLRRLDRRRDRULRUDUURRRRULDDLRULDRRRDLDRLUDLLUDDRURLURURRLRUDLRLLRDLLDRDDLDUDRDLDDRULDDULUDDLLDURDULLDURRURRULLDRLUURURLLUDDRLRRUUDULRRLLRUDRDUURLDDLLURRDLRUURLLDRDLRUULUDURRDULUULDDLUUUDDLRRDRDUDLRUULDDDLDDRUDDD",
		"DRRDRRURURUDDDRULRUDLDLDULRLDURURUUURURLURURDDDDRULUDLDDRDDUDULRUUULRDUDULURLRULRDDLDUDLDLULRULDRRLUDLLLLURUDUDLLDLDRLRUUULRDDLUURDRRDLUDUDRULRRDDRRLDUDLLDLURLRDLRUUDLDULURDDUUDDLRDLUURLDLRLRDLLRUDRDUURDDLDDLURRDDRDRURULURRLRLDURLRRUUUDDUUDRDRULRDLURLDDDRURUDRULDURUUUUDULURUDDDDUURULULDRURRDRDURUUURURLLDRDLDLRDDULDRLLDUDUDDLRLLRLRUUDLUDDULRLDLLRLUUDLLLUUDULRDULDLRRLDDDDUDDRRRDDRDDUDRLLLDLLDLLRDLDRDLUDRRRLDDRLUDLRLDRUURUDURDLRDDULRLDUUUDRLLDRLDLLDLDRRRLLULLUDDDLRUDULDDDLDRRLLRDDLDUULRDLRRLRLLRUUULLRDUDLRURRRUULLULLLRRURLRDULLLRLDUUUDDRLRLUURRLUUUDURLRDURRDUDDUDDRDDRUD",
	],
	part1: function(){
		var code = "";
		var x = 1;
		var y = 1;
		
		for(i = 0; i<this.input.length; i++){
			var curInstructions = this.input[i];
			
			console.log("Starting at:", {x, y, k: this.keypad1[y][x]});
			
			for(j = 0; j<curInstructions.length; j++){
				var curInstruction = curInstructions[j];
				var xInc = 0;
				var yInc = 0;
				
				switch(curInstruction){
					case "L": xInc = -1; break;
					case "U": yInc = -1; break;
					case "R": xInc = 1; break;
					case "D": yInc = 1; break;
				}
				
				x = x + xInc;
				x = x > 2 ? 2 : x;
				x = x < 0 ? 0 : x;
				
				y = y + yInc;
				y = y > 2 ? 2 : y;
				y = y < 0 ? 0 : y;
				
				console.log(curInstruction, {x, y, k: this.keypad1[y][x]});
			}
			
			code += this.keypad1[y][x];
		}
		
		return code;
	},
	part2: function(){
		var code = "";
		var x = 0;
		var y = 2;
		var UBound = 4;
		var LBound = 0;
		
		for(i = 0; i<this.input.length; i++){
			var curInstructions = this.input[i];
			
			console.log("Starting at:", {x, y, k: this.keypad2[y][x]});
			
			for(j = 0; j<curInstructions.length; j++){
				var curInstruction = curInstructions[j];
				var xInc = 0;
				var yInc = 0;
				
				switch(curInstruction){
					case "L": xInc = -1; break;
					case "U": yInc = -1; break;
					case "R": xInc = 1; break;
					case "D": yInc = 1; break;
				}
				
				x += xInc;
				x = x > UBound ? UBound : x;
				x = x < LBound ? LBound : x;
				
				if(this.keypad2[y][x] == "_"){
					x -= xInc
				}
				
				y = y + yInc;
				y = y > UBound ? UBound : y;
				y = y < LBound ? LBound : y;
				
				if(this.keypad2[y][x] == "_"){
					y -= yInc
				}
				
				console.log(curInstruction, {x, y, k: this.keypad2[y][x]});
			}
			
			code += this.keypad2[y][x];
		}
		
		return code;
	}
}