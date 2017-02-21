$('document').ready(function(){

        //start a new game
        $('#newgame').click(function(){
            localStorage.clear();
            requestSecret();
        });



       $('.letter').click(function(){
            //Use count to count the number of guesses
            var count = 0;
            //Record the guessed answer
            var guess = this.innerHTML.toLowerCase();
            //Access the secret to check if letters exists
            var secret = localStorage.answer;
            //Access the index of correct guess
            var i = secret.indexOf(guess);
            //check to see if the letter exists
            if(secret.indexOf(guess) > -1){
                console.log('Yes');
            } else {
                console.log('No');
                count++
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