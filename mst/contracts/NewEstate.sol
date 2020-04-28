pragma solidity ^0.5.0;

contract Contract {

  address public test;

  function createListing(string memory listingAddress,uint dateOfAvailability,uint openHouseStartTime,string memory houseType) public returns(address){
    address payable own = msg.sender;
    listingCreation d = new listingCreation(own,listingAddress,dateOfAvailability,openHouseStartTime,houseType);
    test = address(d);

    return test;
  }
}

contract listingCreation {

  string public listingAddress;
  uint public dateOfAvailability;
  uint public openHouseStartTime;
  string public houseType;

  uint public reservationCounter;
  uint public maxNumberOfAttendees;
  address payable public creator;
  

  mapping (uint => Listing) public listings;
  mapping(address => uint) public listingsCreatorTracker;
  mapping(uint =>address) public creatorTracker;		


  constructor(address payable owner,string memory name,uint date,uint start, string memory houseType)public payable{
    creator = owner;
    listingAddress = name;
    dateOfAvailability = date;
    openHouseStartTime = start;
    houseType = houseType;
  }

  struct Listing{ 
    string listingType; 
    string listingAddress;
    uint globalListingCount;
    uint listingCost;
  }

  function permissionChecker(string memory name,uint max) public { //checking if the person calling the contract has the right to add a listing.
    require(msg.sender == creator,": Can't add listing, you aren't a creator.");
    makeTheListing(name, max);
  }
 

  function makeTheListing( string memory name, uint max) private {
    reservationCounter ++;
    listings[reservationCounter] = Listing(listingAddress,name,max,0);
    maxNumberOfAttendees += max;

  }


}
