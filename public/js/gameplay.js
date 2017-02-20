$('document').ready(function(){


        

        var wordify = function (list){
               words = list.split('\n');
                listSize = words.length;
                randomNum = Math.floor((Math.random() * listSize) + 0);
                newWord = words[randomNum];
                splitWord = newWord.split('');
                var hiddenWord = splitWord.map(function(x){
                    return '-'
                })

                document.getElementById('guessbox').innerHTML = hiddenWord.join('');
                console.log(newWord + '\n' + splitWord + '\n' + hiddenWord);
                
                localStorage.setItem("answer",newWord);
                console.log(localStorage);
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



    requestWord();

})