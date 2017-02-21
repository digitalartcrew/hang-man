$('document').ready(function(){

    //Hangman begins
    var x = 400;
    var y = 120;
    
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    //head
    var head = function displayhead(){
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();
    }

    // body
    var bdy = function displaybody(){
        ctx.beginPath();
        ctx.moveTo(x, y + 50);
        ctx.lineTo(x, y + 175);
        ctx.stroke();
    }

    //left arm
    var la = function leftarm(){ 
        ctx.beginPath();
        ctx.moveTo(x, y + 75);
        ctx.lineTo(x - 45, y + 85);
        ctx.stroke();
    }

     //right arm
     var ra = function rightarm(){
        ctx.beginPath();
        ctx.moveTo(x, y + 75);
        ctx.lineTo(x + 50, y + 85);
        ctx.stroke(); 
    }

      //left leg
      var ll = function leftleg(){
        ctx.beginPath();
        ctx.moveTo(x, y + 175);
        ctx.lineTo(x - 40, y + 225);
        ctx.stroke();
    }

     //right leg
     var rl = function rightleg(){
        ctx.beginPath();
        ctx.moveTo(x, y + 175);
        ctx.lineTo(x + 50, y + 225);
        ctx.stroke();
    } 

    //stand
    var s = function stand(){
        ctx.beginPath();
        ctx.moveTo(x, y - 110);
        ctx.lineTo(x, y - 50);
        ctx.moveTo(x, y - 110);
        ctx.lineTo(x - 200, y - 110);
        ctx.moveTo(x-200, y - 110);
        ctx.lineTo(x-200, y + 240);
        ctx.moveTo(x-160, y + 240);
        ctx.lineTo(x-240, y +240);
        ctx.stroke();
    }

    s();
        //Hangman ends

        var guessCount = '-';
        var missedLetters = [];
        var showLetters = "";

        //Initial Start Screen
        document.getElementById('displaymessage').innerHTML = "Click the New Game Button to begin..."
        document.getElementById('remaining').innerHTML = guessCount;

        //start a new game
        document.getElementById('newgame').addEventListener("click", function(){
            localStorage.clear();
            requestSecret();
            guessCount = 6;
            document.getElementById('remaining').innerHTML = guessCount;
            document.getElementById('displaymessage').innerHTML = "Missed Letters";
            document.getElementById('results').innerHTML = "";
            document.getElementById('missed').innerHTML = [];
        });



        $('.letter').click(function(){
            var guess = this.innerHTML.toLowerCase();
            var secret = localStorage.answer;
            var i = secret.indexOf(guess);
            

            if(secret.indexOf(guess) > -1){
                console.log("Guess = " + guess);
                console.log("Index = " + secret.indexOf(guess));
                console.log("Current Display:" + showLetters[0]);
                
                while(i >= 0){
                    console.log("Dups" + i);
                    showLetters[i] = guess;
                    i = secret.indexOf(guess, i + 1);
                    console.log(showLetters.join(''));
                    document.getElementById('guessbox').innerHTML = showLetters.join('');
                };

                if (secret == showLetters.join('')) {
                    document.getElementById('results').innerHTML = "You win!";
                } else {
                    console.log("Not yet!");
                }

                console.log("Updated:" + showLetters);
                console.log('Yes');
            } else {
                guessCount -= 1;
                missedLetters.push(guess);
                document.getElementById('remaining').innerHTML = guessCount;
                document.getElementById('missed').innerHTML = missedLetters;
                if(guessCount === 5){
                    head();
                } else if(guessCount === 4){
                    bdy();
                } else if(guessCount === 3){
                    la();
                } else if (guessCount === 2) {
                    ra();
                } else if (guessCount === 1) {
                    ll();
                } else if (guessCount <= 0){
                    rl();
                    document.getElementById('results').innerHTML = "Sorry, you lose."
                };
            }
        });


        function secretify(list){
                secrets = list.split('\n');
                listSize = secrets.length;
                randomNum = Math.floor((Math.random() * listSize) + 0);
                newScret = secrets[randomNum];
                showLetters = newScret.split('').map(function(x){
                    return '-'
                });

                document.getElementById('guessbox').innerHTML = showLetters.join(''); 
                localStorage.setItem("answer",newScret);
                localStorage.setItem("guessedLetters",showLetters);
            }

            function requestSecret() {
                $.ajax({
                    type: "GET",
                    datatype: 'jsonp', 
                    url:"https://linkedin-words.herokuapp.com/words", 
                    success: function(res){
                       localStorage.clear();
                       secretify(res);
                   }, 
                   failure: function(err){
                    console.log(err);
                }
            });
            }


        })