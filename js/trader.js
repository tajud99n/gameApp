var sb = require("./sandbox.js");

    var id, parent, list, play;

    id = "display-outcome";

    function init() {
        parent = document.getElementById("board");
        list = document.getElementById("outcome");
        play = parent.getElementsByClassName("game")[0];

        sb.listen({ "gameAction": showOutCome}, id);

        $on(play, "click", closeBoard);
    }

    function showOutCome(actionOutcome) {
        var li = document.createElement("li");

        var outcome = document.createElement("p");
        var outcomeNodeValue = document.createTextNode(outCome);
        outcome.appendChild(outcomeNodeValue);

        li.appendChild(outcome);

        list.appendChild(li);

        parent.classList.toggle("module-active");
    }

    function closeBoard(e) {
        sb.notify({
            type: "closeBoard",
            data: null
        });

        parent.classList.toggle("module-active");

        e.preventDefault();
    }

        module.exports.id = id;
        module.exports.init = init;
        module.exports.showOutCome = showOutCome;
        module.exports.closeBoard = closeBoard; 
