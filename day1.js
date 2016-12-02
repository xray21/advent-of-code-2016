var AOC1 = {
	dirs: ["N", "E", "S", "W"],
	input: ["L2","L3","L3","L4","R1","R2","L3","R3","R3","L1","L3","R2","R3","L3","R4","R3","R3","L1","L4","R4","L2","R5","R1","L5","R1","R3","L5","R2","L2","R2","R1","L1","L3","L3","R4","R5","R4","L1","L189","L2","R2","L5","R5","R45","L3","R4","R77","L1","R1","R194","R2","L5","L3","L2","L1","R5","L3","L3","L5","L5","L5","R2","L1","L2","L3","R2","R5","R4","L2","R3","R5","L2","L2","R3","L3","L2","L1","L3","R5","R4","R3","R2","L1","R2","L5","R4","L5","L4","R4","L2","R5","L3","L2","R4","L1","L2","R2","R3","L2","L5","R1","R1","R3","R4","R1","R2","R4","R5","L3","L5","L3","L3","R5","R4","R1","L3","R1","L3","R3","R3","R3","L1","R3","R4","L5","L3","L1","L5","L4","R4","R1","L4","R3","R3","R5","R4","R3","R3","L1","L2","R1","L4","L4","L3","L4","L3","L5","R2","R4","L2"],
	part1: function(){
		var output;
		var x = 0;
		var y = 0;
		var curDir = 0;
	
		for(i = 0; i<this.input.length; i++){
			var curInput = this.input[i];
			var moveDir = curInput.charAt(0) == "L" ? -1 : 1;
			var numBlocks = parseInt(curInput.substring(1));
			
			curDir = curDir += moveDir;
			curDir = curDir > this.dirs.length - 1 ? 0 : curDir;
			curDir = curDir < 0 ? this.dirs.length - 1 : curDir;
			
			switch(this.dirs[curDir]){
				case "N":
					y += numBlocks; break;
				case "E": 
					x += numBlocks; break;
				case "S":
					y -= numBlocks; break;
				case "W":
					x -= numBlocks; break;
			}
			
			output = {x, y, s: Math.abs(x) + Math.abs(y)};
		}
		
		return output;
	},
	part2: function(){
		var output;
		var x = 0;
		var y = 0;
		var curDir = 0;
		var coords = {};
		
		for(i = 0; i<this.input.length; i++){
			var curInput = this.input[i];
			var moveDir = curInput.charAt(0) == "L" ? -1 : 1;
			var numBlocks = parseInt(curInput.substring(1));
			var xInc = 0;
			var yInc = 0;
			
			curDir = curDir += moveDir;
			curDir = curDir > this.dirs.length - 1 ? 0 : curDir;
			curDir = curDir < 0 ? this.dirs.length - 1 : curDir;
			
			switch(this.dirs[curDir]){
				case "N":
					yInc = 1; break;
				case "E": 
					xInc = 1; break;
				case "S":
					yInc = -1; break;
				case "W":
					xInc = -1; break;
			}
			
			for(n = 1; n <= numBlocks; n++){
				x += xInc;
				y += yInc;
				
				key = x.toString() + "_" + y.toString();
				coords[key] = (coords[key] || 0) + 1;
				
				if(coords[key] > 1){
					output = {x, y, s: Math.abs(x) + Math.abs(y)};
				}
				
				if(output) { break; }
			}
			
			if(output) { break; }
		}
		
		return output;
	}
}

