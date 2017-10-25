const Demo = require('../index.js');

describe('Demo.show', function () {
  it('A.name + "_" + B.name', function() {
    const name = Demo.show();
    assert(name === 'A_B');
  });
});
