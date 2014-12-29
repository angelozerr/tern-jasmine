(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require.main.require("../lib/infer"), require.main.require("../lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("jasmine", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
    "!name": "jasmine",	
    "describe": {
      "!type": "fn(description: string, specDefinitions: fn())",
      "!doc": "A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function. The string is a name or title for a spec suite - usually what is being tested. The function is a block of code that implements the suite."
    },
    "it": {
      "!type": "fn(description: string, specDefinitions: fn())",
      "!doc": "Specs are defined by calling the global Jasmine function it, which, like describe takes a string and a function. The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec."
    },
    "expect": {
      "!type": "fn()",
      "!doc": "Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value."
    }
  }

});