$('document').ready(function(){

	var x = 75;
	//head
	var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();

    // body
    ctx.beginPath();
    ctx.moveTo(x, 125);
    ctx.lineTo(x, 250);
    ctx.stroke();

    //left arm
    ctx.beginPath();
    ctx.moveTo(x, 150);
    ctx.lineTo(30, 160);
    ctx.stroke();

     //left arm
    ctx.beginPath();
    ctx.moveTo(x, 150);
    ctx.lineTo(125, 160);
    ctx.stroke();

      //left leg
    ctx.beginPath();
    ctx.moveTo(x, 250);
    ctx.lineTo(30, 300);
    ctx.stroke();

     //left leg
    ctx.beginPath();
    ctx.moveTo(x, 250);
    ctx.lineTo(125, 300);
    ctx.stroke();



})