/**
 * This tern plugin is a sample which shows how to add custom matchers.
 * 
 * @param mod
 * @returns
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";
  
  tern.registerPlugin("custom_matchers", function(server, options) {
    return {
      defs : defs
    };
  });
 
  var defs = {
    "!name": "custom_matchers",
    "!define": {
      "!jasmine": {        
        "customMatcher": {	
          "!type": "fn(expected: number)",
           "!doc": "Custom matcher"
        }
      }
    }
  }

});