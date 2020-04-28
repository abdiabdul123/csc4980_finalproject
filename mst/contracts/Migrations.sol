pragma solidity >=0.4.21 <0.6.0;

contract Migrations {
  address public creator;
  uint public recentCompletion;

  constructor() public {
    creator = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == creator) _;
  }

  function setCompleted(uint finished) public restricted {
    recentCompletion = finished;
  }

  function upgrade(address updated_address) public restricted {
    Migrations updated = Migrations(updated_address);
    updated.setCompleted(recentCompletion);
  }
}
