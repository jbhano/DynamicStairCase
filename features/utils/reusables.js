
"use strict";

var methods = {};

methods.num_ways = function(numOfStairs) {

  var calculatedNumberOfWays
  if(numOfStairs<=1){
     calculatedNumberOfWays=numOfStairs;
  }else{
    calculatedNumberOfWays = this.count_ways(numOfStairs+1);
  }
  return calculatedNumberOfWays;

};

methods.count_ways = function(numOfStairs){

  var ways = [0,1];

  for (var i=2; i <= numOfStairs; i++){
    ways[i] = ways[i-2] + ways[i-1];
  }
  return ways[numOfStairs];

};


exports.data = methods;


