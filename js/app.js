window.$on = function (target, type, cb) {
    target.addEventListener(type, cb, false);
};

var CORE = require("./core.js"),
    farmer = require("./farmer.js"),
    trader = require("./trader.js");
    
CORE.addModule(farmer.id, farmer);
CORE.addModule(trader.id, trader);

farmer.init();
trader.init();
