var util = require("./util");

exports['test describe completion'] = function() {

  util.assertCompletion("it", {
    "name":"it",
    "type":"fn(description: string, specDefinitions: fn())",
    "origin":"jasmine"
  }, "it");

}

if (module == require.main) require("test").run(exports);