var newEstate;
var address;
var listing;
var test;

App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',


  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    var status = $("#status");
    
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        ethereum.enable();
      } catch (err) {
        $('#status').html('Wrong account info', err)
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)

    } else { 
      $('#status').html("You don't have metamask download it")
    }
    App.web3Provider = web3.currentProvider;

    return App.initContract();
  },

  initContract: function() {
  $.getJSON("Contract.json", function(newEstate) {

    App.contracts.Contract = TruffleContract(newEstate);

    App.contracts.Contract.setProvider(App.web3Provider);


    return App.render();
  });
 },

 render: function() {

    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    App.contracts.Contract.deployed().then(function(instance){
      newEstate = instance;
     test = web3.eth.contract(instance);

    }).then(function(listingAddress) {
      console.log(newEstate);
      console.log(test);
    })
  },

 addEvent: async function() {

    var listingAddressId= document.getElementById("listingAddress").value;
    var dateId= parseInt(document.getElementById("availabilityDate").value);
    var startTimeId= parseInt(document.getElementById("startTime").value);
    var houseTypeId= document.getElementById("houseType").value;
    var leasingTypeId= document.getElementById("leasingType").value;

newEstate.newAddressListing(listingAddressId,dateId,startTimeId,{from:App.acc});
address = await newEstate.test();


console.log(address);
  },

  createTickets: function(){

  var eventCreator= document.getElementById("eventOwn").value;
  var maxNumOfAttendees = parseInt(document.getElementById("limitOfAttendees").value);
  var telephoneNumber = parseInt(document.getElementById("phoneNumber").value);


listing.permissionChecke(ef,maxNumOfAttendees, telephoneNumber,{from: App.acc});}
listing.then(function(instance){return instance.permissionChecke(eventCreator,maxNumOfAttendees, telephoneNumber,{from: App.acc});})

console.log(DeployedAddress.telephoneNumber);
 },

};
$(function() {
  $(window).load(function() {
    App.init();
  });
});
