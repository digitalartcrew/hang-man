$('document').ready(function(){

        var guessCount = 6;
        var missedLetters = [];


        document.getElementById('remaining').innerHTML = guessCount;
        //start a new game
        $('#newgame').click(function(){
            localStorage.clear();
            requestSecret();
            console.log(localStorage);
        });



       $('.letter').click(function(){
            var guess = this.innerHTML.toLowerCase();
            var secret = localStorage.answer;
            var i = secret.indexOf(guess);
           
            //check to see if the letter exists

            if(secret.indexOf(guess) > -1){

                console.log('Yes');
            } else {
                missedLetters.push(guess);
                document.getElementById('missed').innerHTML = missedLetters;
                guessCount--;
                if(guessCount === 0){
                    document.getElementById('results').innerHTML = "Sorry, you lose."
                }
            }
  
        
     
       });

      


        function secretify(list){
                //Create an array from list of secrets
                secrets = list.split('\n');
                //Access the length of list to randomly select an index
                listSize = secrets.length;
                //Randomly select an index
                randomNum = Math.floor((Math.random() * listSize) + 0);
                //Accress random secret
                newScret = secrets[randomNum];
                //creates space that can be updated in local storage
                showLetters = newScret.split('').map(function(x){
                    return '-'
                });
                //display space on the page
                document.getElementById('guessbox').innerHTML = showLetters.join('');
                //Store new secret in local storage to check  
                localStorage.setItem("answer",newScret);
                //Store spaces to be updated
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