

const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, Then, When }) {

 Given('builder is building stair case having {int}', function (numberOfStairs) {
    numOfStairs = numberOfStairs;
  });

  Then('business can use this staircase in {int} possible paths', function (expectedNumberOfPaths) {
    var calculatedNumberOfWays = num_ways(numOfStairs);
    assert.equal(expectedNumberOfPaths, calculatedNumberOfWays);

  });
});


function num_ways(numOfStairs) {

    
    if(numOfStairs<=1){
      calculatedNumberOfWays=numOfStairs;
    }else{
    calculatedNumberOfWays = count_ways(numOfStairs+1)
    //console.log("%%%%   " + calculatedNumberOfWays);
    }
       return calculatedNumberOfWays;
  }

function count_ways(numOfStairs){
  var ways = [0,1];

    for (var i=2; i <= numOfStairs; i++){
      ways[i] = ways[i-2] + ways[i-1];
    }
    return ways[numOfStairs];
  }



