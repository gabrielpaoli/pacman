
function initPacman(){
	var canvas = document.getElementById('canvas-home-title-pacman');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	
	var x = 25;
	var y = 25;

	ctx.beginPath();
	ctx.arc(x, y, 20, 0.25 * Math.PI, 1.25 * Math.PI, false);
	ctx.fillStyle = "rgb(255, 255, 0)";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x, y, 20, 0.75 * Math.PI, 1.75 * Math.PI, false);
	ctx.fill();
	ctx.beginPath();
}

function initBlinky() { 
	canvas = document.getElementById('canvas-presentation-blinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_BLINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
}
	
function initPinky() { 
	canvas = document.getElementById('canvas-presentation-pinky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_PINKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
}
	
function initInky() { 
	canvas = document.getElementById('canvas-presentation-inky');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_INKY_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
}
	
function initClyde() { 
	canvas = document.getElementById('canvas-presentation-clyde');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_CLYDE_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
}

function initHeart() { 
	canvas = document.getElementById('canvas-heart');
	canvas.setAttribute('width', '30');
	canvas.setAttribute('height', '20');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}

	var w = 20, h = 20;

	ctx.fillStyle = "#ff5050";
	var d = Math.min(w, h);
	var k = 0;

	ctx.moveTo(k, k + d / 4);
	ctx.quadraticCurveTo(k, k, k + d / 4, k);
	ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
	ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
	ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
	ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
	ctx.lineTo(k + d / 2, k + d);
	ctx.lineTo(k + d / 4, k + d * 3/4);
	ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
	ctx.fill();
}

function initSchool() { 
	canvas = document.getElementById('canvas-school');
	canvas.setAttribute('width', '30');
	canvas.setAttribute('height', '30');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}

    ctx.fillStyle = "#e0c233";
    ctx.fillRect(2,7, 26,23);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(2,7, 26,23);

    ctx.fillStyle = "white";
    ctx.fillRect(7,0, 15,7);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(7,0, 15,7);


    //Top windows
    ctx.fillStyle = "#8ccfff";
    ctx.fillRect(7,11, 5,5);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(7,11, 5,5);

    ctx.fillStyle = "#8ccfff";
    ctx.fillRect(12,11, 5,5);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(12,11, 5,5);

    ctx.fillStyle = "#8ccfff";
    ctx.fillRect(17,11, 5,5);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(17,11, 5,5);


    //Middle windows
    ctx.fillStyle = "#8ccfff";
    ctx.fillRect(17,20, 5,5);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(17,20, 5,5);

    ctx.fillStyle = "#8ccfff";
    ctx.fillRect(7,20, 5,5);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(7,20, 5,5);


    //Door
    ctx.fillStyle = "#A0522D";
    ctx.fillRect(12,20, 5,10);

    ctx.strokeStyle = "#352215";
    ctx.lineWidth   = 2;
    ctx.strokeRect(12,20, 5,10);


    //Circles
    var centerX = 2;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    


    //Circles
    var centerX = 6;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    

    //Circles
    var centerX = 10;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    



    //Circles
    var centerX = 20;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    


    //Circles
    var centerX = 24;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    

    //Circles
    var centerX = 28;
    var centerY = 28;
    var radius = 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#352215';
    ctx.stroke();    



}

function drawMoney(x, y){
	canvas = document.getElementById('canvas-money');
	canvas.setAttribute('width', '30');
	canvas.setAttribute('height', '20');
	if (canvas.getContext) { 
		ctx = canvas.getContext('2d');
	}

	var x = x - 10;
	var y = y - 6;
	var centerX = x + 12;
	var centerY = y + 6;
	var centerSignX = x + 9;
	var centerSignY = y + 9;

	ctx.fillStyle = "green";
	ctx.fillRect(x,y,24,12);

	var radius = 4;

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'white';
	ctx.fill();

	ctx.font = "9px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("$",centerSignX,centerSignY);
	
	ctx.fillStyle = "#dca5be";
}