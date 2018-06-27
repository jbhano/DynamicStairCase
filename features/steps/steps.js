
"use strict";
const assert = require('assert');

var utils = require('../utils/reusables.js');
var {Given} = require('cucumber');
var {Then} = require('cucumber');

var numOfStairs;

Given('builder is building stair case having {int}', function (numberOfStairs) {

    numOfStairs = numberOfStairs;

  });

Then('business can use this staircase in {int} possible paths', function (expectedNumberOfPaths) {
    var calculatedNumberOfWays = utils.data.num_ways(numOfStairs);
    assert.equal(expectedNumberOfPaths, calculatedNumberOfWays);

  });

