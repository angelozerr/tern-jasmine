var util = require("./util");

exports['test expect completion'] = function() {

  util.assertCompletion("ex", {
    "name":"expect",
    "type":"fn(value: ?)",
    "origin":"jasmine"
  }, "expect");

}

exports['test standard matcher completion'] = function() {

  util.assertCompletion("expect(true).t", {
    "name":"toBe",
    "type":"fn(expected: ?)",
    "origin":"jasmine"
  }, "toBe");

}

exports['test not matcher completion'] = function() {

  util.assertCompletion("expect(true).not.t", {
    "name":"toBe",
    "type":"fn(expected: ?)",
    "origin":"jasmine"
  }, "toBe");

}
exports['test custom matcher completion'] = function() {

  util.assertCompletion("expect(true).c", {
    "name":"customMatcher",
    "type":"fn(expected: number)",
    "origin":"custom_matchers"
  }, "customMatcher", true);

  util.assertCompletion("expect(true).not.c", {
    "name":"customMatcher",
    "type":"fn(expected: number)",
    "origin":"custom_matchers"
  }, "customMatcher", true);
  
}
if (module == require.main) require("test").run(exports);