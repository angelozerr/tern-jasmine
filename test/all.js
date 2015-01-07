exports['test describe completion'] = require('./test_describe_completion');
exports['test it completion'] = require('./test_it_completion');
exports['test expect completion'] = require('./test_expect_completion');

if (require.main === module) require("test").run(exports);