$('document').ready(function(){

	var x = 400;
    var y = 120;
	//head
	var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    function displayhead(){
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();
    }

    // body
    function displaybody(){
        ctx.beginPath();
        ctx.moveTo(x, y + 50);
        ctx.lineTo(x, y + 175);
        ctx.stroke();
    }

    //left arm
    function leftarm(){ 
        ctx.beginPath();
        ctx.moveTo(x, y + 75);
        ctx.lineTo(x - 45, y + 85);
        ctx.stroke();
    }

     //right arm
    function rightarm(){
        ctx.beginPath();
        ctx.moveTo(x, y + 75);
        ctx.lineTo(x + 50, y + 85);
        ctx.stroke(); 
     }

      //left leg
    function leftleg(){
        ctx.beginPath();
        ctx.moveTo(x, y + 175);
        ctx.lineTo(x - 40, y + 225);
        ctx.stroke();
    }

     //right leg
    function rightleg(){
        ctx.beginPath();
        ctx.moveTo(x, y + 175);
        ctx.lineTo(x + 50, y + 225);
        ctx.stroke();
    } 

    //rope
    function rope(){
        ctx.beginPath();
        ctx.moveTo(x, y - 110);
        ctx.lineTo(x, y - 50);
        ctx.moveTo(x, y - 110);
        ctx.lineTo(x - 200, y - 110);
        ctx.moveTo(10, y - 110);
        ctx.lineTo(10, y + 200)
        ctx.stroke();
    }


    displayhead();
    displaybody();
    leftarm();
    rightarm();
    leftleg();
    rightleg();
    rope();




})