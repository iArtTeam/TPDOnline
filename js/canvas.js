$(document).ready(function(){


	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.rect(10, 50, 20, 20);
	context.fillStyle = 'yellow';
	context.fill();
	//context.lineWidth = 0;
	//context.strokeStyle = 'black';
	context.stroke();
});

