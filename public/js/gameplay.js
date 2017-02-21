$('document').ready(function(){

        function Player(name,turn,score){
            this.name = name;
            this.score = score;
            this.turn = false;

        }

        var computer = new Player("Computer",false,0);
        var user = new Player("User",false,0);

        $('#newgame').click(function(){
            localStorage.clear();
            startGame();
            requestWord();
        });

        function startGame(){
            var flip = Math.random();

            if(flip > 0.5){
                computer.turn = true;
                document.getElementById('user').innerHTML =" "
                document.getElementById('computer').innerHTML =" Current User"
            } else {
                user.turn = true;
                document.getElementById('computer').innerHTML =" "
                document.getElementById('user').innerHTML =" Current User"
            }
        };


       $('.letter').click(function(){
            //Use count to count the number of guesses
            var count = 0;
            //Record the guessed answer
            var guess = this.innerHTML.toLowerCase();
            //Access the word to check if letters exists
            var word = localStorage.answer;
            //Access the index of correct guess
            var i = word.indexOf(guess);
            //check to see if the letter exists
            if(word.indexOf(guess) > -1){
                temp = localStorage.guessedLetters.split(',');
                temp[i] = guess;
                localStorage.guessedLetters = temp.join('');
                 // 
            } else {
                console.log('No');
                count++
            }
  
        
     
       });

      


        function wordify(list){
                //Create an array from list of words
                words = list.split('\n');
                //Access the length of list to randomly select an index
                listSize = words.length;
                //Randomly select an index
                randomNum = Math.floor((Math.random() * listSize) + 0);
                //Accress random word
                newWord = words[randomNum];
                //creates space that can be updated in local storage
                showLetters = newWord.split('').map(function(x){
                    return '-'
                });
                //display space on the page
                document.getElementById('guessbox').innerHTML = showLetters.join('');
                //Store new word in local storage to check  
                localStorage.setItem("answer",newWord);
                //Store spaces to be updated
                localStorage.setItem("guessedLetters",showLetters);
        }

	    function requestWord() {
        $.ajax({
            type: "GET",
            datatype: 'jsonp', 
            url:"https://linkedin-words.herokuapp.com/words", 
            success: function(res){
             localStorage.clear();
             wordify(res);
        }, 
            failure: function(err){
                console.log(err);
            }
        });
    }


})