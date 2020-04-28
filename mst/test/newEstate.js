var NewEstate = artifacts.require('./NewEstate.sol');


contract('NewEstate', function(accounts) {
  it("True", function(done) {
    var newEstate = NewEstate.deployed();
    assert.isTrue(true);
    done();
  });
});

