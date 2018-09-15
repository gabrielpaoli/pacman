var BUBBLES_ARRAY = new Array();
var BUBBLES_CANVAS_CONTEXT = null;
var BUBBLES_X_START = 30;
var BUBBLES_X_END = 518;
var BUBBLES_GAP = ((BUBBLES_X_END - BUBBLES_X_START) / 25);
var BUBBLES_Y_START = 26;
var BUBBLES_Y_END = 522;
var BUBBLES_SIZE = 3;
var BUBBLES_COUNTER = 0;

var SUPER_BUBBLES = [];
var SUPER_BUBBLES_SIZE = 8;
var SUPER_BUBBLES_BLINK = false;
var SUPER_BUBBLES_BLINK_STATE = 0;
var SUPER_BUBBLES_BLINK_TIMER = -1;
var SUPER_BUBBLES_BLINK_SPEED = 525;

function initBubbles() { 
	BUBBLES_COUNTER = 0;
	BUBBLES_ARRAY.length = 0;

	var canvas = document.getElementById('canvas-bubbles');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		BUBBLES_CANVAS_CONTEXT = canvas.getContext('2d');
	}
}

function getBubblesCanevasContext() { 
	return BUBBLES_CANVAS_CONTEXT;
}

function drawBubbles() { 

	var ctx = getBubblesCanevasContext();
	
	for (var line = 1, linemax = 29, i = 0, s = 0; line <= linemax; line ++) { 
		var y = getYFromLine(line);
		for (var x = BUBBLES_X_START, xmax = BUBBLES_X_END, bubble = 1 ; x < xmax; bubble ++, x += BUBBLES_GAP) { 
			if (canAddBubble(line, bubble)) { 
				var type = "";
				var size = "";
				if (isSuperBubble(line, bubble)) { 
					type = "s";
					size = SUPER_BUBBLES_SIZE;
					SUPER_BUBBLES[s] = line + ";" + bubble + ";" + parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";0";
					

					if (line === 4 && bubble === 1) { 
						DrawSchool(ctx,x,y);
					}
					if (line === 4 && bubble === 26) { 
						drawBook(ctx,x,y);
					}
					if (line === 23 && bubble === 1) { 
						drawMedical(ctx,x,y);
					}
					if (line === 23 && bubble === 26) { 
						drawHeart(ctx,x,y);
					}

					s ++;
				} else { 
					ctx.fillStyle = "#dca5be";
					type = "b";
					size = BUBBLES_SIZE;
					ctx.beginPath();
					ctx.arc(correctionX(x, bubble), y, size, 0, 2 * Math.PI, false);
					ctx.fill();					
					ctx.closePath();
				}
				BUBBLES_COUNTER ++;

				
				BUBBLES_ARRAY.push( parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";" + line + ";" + bubble + ";" + type + ";0" );
				i ++;
			}
		}
	}
}

function drawHeart(ctx,x,y){
	var x = x - 10;
	var y = y - 10;

  var img=document.getElementById("heart");
	ctx.beginPath();
  ctx.drawImage(img,x,y);
	ctx.closePath();
};


function drawBook(ctx,x,y){
	var x = x - 8;
	var y = y - 4;

	ctx.beginPath();

	ctx.rect(x + 2,y + 1,17,25);
	ctx.fillStyle = "white";
	ctx.fill();

	ctx.lineWidth = 2;
	ctx.strokeStyle = "#4d2600";
	ctx.stroke();

	ctx.fillStyle = "#4d2600";
	ctx.fillRect(x + 0,y + 3, 17, 25);

	ctx.fillStyle = "white";
	ctx.fillRect(x + 4, y + 8, 9, 2);

	ctx.closePath();
}


function drawMedical(ctx,x,y){

	var x = x - 12;
	var y = y - 16;

	ctx.beginPath();

	ctx.fillStyle = "white";
	ctx.fillRect(x + 0,y + 6,30,20);

	ctx.fillStyle = "red";
	ctx.fillRect(x + 9,y + 14,12,4);

	ctx.fillStyle = "red";
	ctx.fillRect(x + 13,y + 10,4,12);

	ctx.fillStyle = "white";
	ctx.fillRect(x + 8,y + 0,2,6);

	ctx.fillStyle = "white";
	ctx.fillRect(x + 20,y + 0,2,6);

	ctx.fillStyle = "white";
	ctx.fillRect(x + 8,y + 0,12,2);

	ctx.closePath();
}

function DrawSchool(ctx,x,y){

	var x = x - 14;
	var y = y - 6;

	ctx.beginPath();

	//General Rectangle
  ctx.fillStyle = "#e0c233";
  ctx.fillRect(x + 2,y + 7, 26,23);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 2,y + 7, 26,23);

	//Top Rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(x + 7, y + 0, 15,7);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 7, y + 0, 15,7);


  //Top windows
  ctx.fillStyle = "#8ccfff";
  ctx.fillRect(x + 7, y + 11, 5,5);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 7, y + 11, 5,5);

  ctx.fillStyle = "#8ccfff";
  ctx.fillRect(x + 12, y + 11, 5,5);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 12, y + 11, 5,5);

  ctx.fillStyle = "#8ccfff";
  ctx.fillRect(x + 17,y + 11, 5,5);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 17,y + 11, 5,5);


  //Middle windows
  ctx.fillStyle = "#8ccfff";
  ctx.fillRect(x + 17,y + 20, 5,5);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 17,y + 20, 5,5);

  ctx.fillStyle = "#8ccfff";
  ctx.fillRect(x + 7,y + 20, 5,5);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 7,y + 20, 5,5);


  //Door
  ctx.fillStyle = "#A0522D";
  ctx.fillRect(x + 12, y + 20, 5,10);

  ctx.strokeStyle = "#352215";
  ctx.lineWidth   = 2;
  ctx.strokeRect(x + 12, y + 20, 5,10);


  //Circles
  var centerX = x + 2;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    


  //Circles
  var centerX = x + 6;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    

  //Circles
  var centerX = x + 10;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    



  //Circles
  var centerX = x + 20;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    


  //Circles
  var centerX = x + 24;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    

  //Circles
  var centerX = x + 28;
  var centerY = y + 28;
  var radius = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#352215';
  ctx.stroke();    

	ctx.closePath();
}


function stopBlinkSuperBubbles() { 
	clearInterval(SUPER_BUBBLES_BLINK_TIMER);
	SUPER_BUBBLES_BLINK_TIMER = -1;
	SUPER_BUBBLES_BLINK = false;
}

function blinkSuperBubbles() { 

	if (SUPER_BUBBLES_BLINK === false) { 
		SUPER_BUBBLES_BLINK = true;
		SUPER_BUBBLES_BLINK_TIMER = setInterval('blinkSuperBubbles()', SUPER_BUBBLES_BLINK_SPEED);
	} else { 
		
		if (SUPER_BUBBLES_BLINK_STATE === 0) { 
			SUPER_BUBBLES_BLINK_STATE = 1;
		} else { 
			SUPER_BUBBLES_BLINK_STATE = 0;
		}
		
		var clone = SUPER_BUBBLES.slice(0);
		
		for (var i = 0, imax = clone.length; i < imax; i ++) { 
		
			var s = clone[i];
		
			if ( s.split(";")[3] === "0" ) { 
			
				var sx = parseInt(s.split(";")[2].split(",")[0]);
				var sy = parseInt(s.split(";")[2].split(",")[1]);
			
				if (SUPER_BUBBLES_BLINK_STATE === 1) { 
					//eraseBubble("s", sx, sy);
				} else { 
					//var ctx = getBubblesCanevasContext();
					//ctx.fillStyle = "#dca5be";
					//ctx.beginPath();
					//ctx.arc(sx, sy, SUPER_BUBBLES_SIZE, 0, 2 * Math.PI, false);
					//ctx.fill();
					//ctx.closePath();
				}

			}
		}
	}
}

function setSuperBubbleOnXY( x, y, eat ) { 
	for (var i = 0, imax = SUPER_BUBBLES.length; i < imax; i ++) { 
		var bubbleParams = SUPER_BUBBLES[i].split( ";" );
		var testX = parseInt(bubbleParams[2].split( "," )[0]);
		var testY = parseInt(bubbleParams[2].split( "," )[1]);
		if ( testX === x && testY === y ) { 
			SUPER_BUBBLES[i] = SUPER_BUBBLES[i].substr( 0, SUPER_BUBBLES[i].length - 1 ) + "1";
			break;
		}
	}
}

function getBubbleOnXY( x, y ) { 

	var bubble = null;
	for (var i = 0, imax = BUBBLES_ARRAY.length; i < imax; i ++) { 
		var bubbleParams = BUBBLES_ARRAY[i].split( ";" );
		var testX = parseInt(bubbleParams[0].split( "," )[0]);
		var testY = parseInt(bubbleParams[0].split( "," )[1]);
		if ( testX === x && testY === y ) { 
			bubble = BUBBLES_ARRAY[i];
			break;
		}
	}
	return bubble;
}


function eraseBubble(t, x, y) { 

	var ctx = getBubblesCanevasContext();

	var size = "";
	if (t === "s") { 
		size = SUPER_BUBBLES_SIZE;
		ctx.clearRect(x - 30, y - 30, (30 + 1) * 2, (30 + 1) * 2);
	} else { 
		size = BUBBLES_SIZE;
		ctx.clearRect(x - size, y - size, (size + 1) * 2, (size + 1) * 2);
	}

}

function isSuperBubble(line, bubble) { 
	if ( (line === 23 || line === 4) && (bubble === 1 || bubble === 26)) { 
		return true;
	}
	
	return false;
}

function canAddBubble(line, bubble) { 
	
	if ( ( ( line >= 1 && line <= 4) || (line >= 9 && line <= 10) || (line >= 20 && line <= 22) || (line >= 26 && line <= 28) ) && (bubble === 13 || bubble === 14)) {
		return false;
	} else if ( ( (line >= 2 && line <= 4) || (line >= 21 && line <= 22) ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) { 
		return false;
	} else if ( ( line >= 6 && line <= 7 ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) ||  (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) { 
		return false;
	} else if ( ( line === 8 ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 13 && bubble <= 14) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( (( line >= 9 &&  line <= 19) ) && ( (bubble >= 1 && bubble <= 5) || (bubble >= 22 && bubble <= 26) ) ) { 
		return false;
	} else if ( ( line === 11 || line === 17 ) && ( (bubble >= 7 && bubble <= 20) ) ) { 
		return false;
	} else if ( ( line === 9 || line === 10 ) && ( (bubble === 12 || bubble === 15) ) ) { 
		return false;
	} else if ( ( (line >= 12 && line <= 13) || (line >= 15 && line <= 16) ) && ( (bubble === 9 || bubble === 18) ) ) { 
		return false;
	} else if ( line === 14 && ( (bubble >= 7 && bubble <= 9) || (bubble >= 18 && bubble <= 20) ) ) { 
		return false;
	} else if ( (line === 18 || line === 19) && ( bubble === 9 || bubble === 18) ) { 
		return false;
	} else if ( ( line >= 9 && line <= 10 ) && ( (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) ) ) { 
		return false;
	} else if ( (( line >= 11 && line <= 13) || (line >= 15 && line <= 19) ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( ( (line >= 12 && line <= 16) || (line >= 18 && line <= 19) ) && ( bubble >= 10 && bubble <= 17) ) { 
		return false;
	} else if ( (line === 23) && ( (bubble >= 4 && bubble <= 5) || (bubble >= 22 && bubble <= 23) ) ) { 
		return false;
	} else if ( (line >= 24 && line <= 25) && ( (bubble >= 1 && bubble <= 2) || (bubble >= 4 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) || (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 23) || (bubble >= 25 && bubble <= 26) ) ) { 
		return false;
	} else if ( (line === 26) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( (line >= 27 && line <= 28) && ( (bubble >= 2 && bubble <= 11) || (bubble >= 16 && bubble <= 25) ) ) { 
		return false;
	} else if ((line === 5) && (bubble === 1 || bubble === 2)) { //Remove 2 bubbles
		return false;
	} else if ((line === 5) && (bubble === 26)) { //Remove 1 bubbles
		return false;
	} else if ((line === 22) && (bubble === 1)) { //Remove 1 bubbles
		return false;
	} else if ((line === 23) && (bubble === 2)) { //Remove 1 bubbles
		return false;
	}
	
	return true;
}

function correctionX(x, bubble) { 
	
	if (bubble === 3) { 
		return x + 1;
	} else if (bubble === 6) { 
		return x + 1;
	} else if (bubble === 15) { 
		return x + 1;
	} else if (bubble === 18) { 
		return x + 1;
	} else if (bubble === 21) { 
		return x + 2;
	} else if (bubble === 24) { 
		return x + 2;
	} else if (bubble === 26) { 
		return x + 1;
	}
	return x;
}

function getYFromLine(line) { 
	var y = BUBBLES_Y_START;
	if (line < 8) { 
		y = BUBBLES_Y_START + ( (line - 1) * 18 );
	} else if (line > 7 && line < 15) { 
		y = 150 + ( (line - 8) * 18 );
	} else if (line > 14 && line < 21) { 
		y = 256 + ( (line - 14) * 18 );
	} else if (line > 20 && line < 26) { 
		y = 362 + ( (line - 20) * 18 );
	} else if (line > 25 && line < 29) { 
		y = 452 + ( (line - 25) * 18 );
	} else if (line === 29) { 
		y = BUBBLES_Y_END;
	}

	return y;
}