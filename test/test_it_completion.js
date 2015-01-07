var util = require("./util");

exports['test describe completion'] = function() {

  util.assertCompletion("de", {
    "name":"describe",
    "type":"fn(description: string, specDefinitions: fn())",
    "origin":"jasmine"
  }, "describe");

}

if (module == require.main) require("test").run(exports);