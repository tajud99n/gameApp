var sb = require("./sandbox.js");
    var id, parent, _farmerNumber, play;

    id = "playerFarmer";

    function init() {
        parent = document.getElementById("game");
        _farmerNumber = parent.getElementsByClassName("playerNumber")[0];
        play = parent.getElementsByClassName("submit")[0];

        $on(play, "click", gameOutCome);

        sb.listen({"closeBoard": showGame}, id);
    }

    function generator() {

        var result = [];

        for(var i = 0, len = 4; i < len; i++) {
            result.push(Math.floor(Math.random() * 9) + 1);
        }     
        return result;
    }

    function match(numbers) {
        var cow = 0,
            bull = 0;
       
        var gen = generator();
         console.log(gen);
        for (var i = 0; i < numbers.toString().length; i++) {
            if (numbers.toString()[i] == gen[i]){
                cow++;
                
            }else{
                gen.forEach(function(element) {
                    if (element == numbers.toString()[i]) {
                        bull++;                        
                    }
                });                
            }
        }

        return cow + 'Cows ' + bull + 'Bulls';
    }

    function gameOutCome(e) {
        var farmerNumber;

        farmerNumber = _farmerNumber.value;

        outCome = match(farmerNumber);
        console.log(outCome);
        
        sb.notify({
            type: "gameAction",
            data: outCome
        });

        parent.classList.toggle("module");

        e.preventDefault();
    }

    function showGame() {
        parent.classList.toggle("module");
        location.reload();
    }

    
        module.exports.id = id;
        module.exports.init = init;
        module.exports.gameOutCome = gameOutCome;
        module.exports.showGame = showGame;
    
