
    //module pattern in play; modules basket
    var modules = {};

    function addModule(module_id, mod) {
        console.log(modules);
        modules[module_id] = mod;
    }

    function registerEvents(evt, module_id) {
        var theMod;

        theMod = modules[module_id];
        theMod.events = evt;
    }

    function triggerEvents(evt) {
        var mod;

        for (mod in modules) {
            if (modules.hasOwnProperty(mod)) {
                mod = modules[mod];

                if (mod.events && mod.events[evt.type]) {
                    mod.events[evt.type](evt.data);
                }
                
            }
        }
    }

module.exports.addModule = addModule;
module.exports.registerEvents = registerEvents; 
module.exports.triggerEvents = triggerEvents;
