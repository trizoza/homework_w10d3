var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe('Rat', function() {

  context("Rat's properties", function() {
    var stinky = new Rat("Stinky");

    it('can have name', function() {
      assert.equal("Stinky", stinky.name);
    });

  });

  context("Rat's methods", function() {
    var brain = new Rat("Brain");
    var taquito = new Food("taquito", 50);

    it('can poison food', function() {
      brain.touchFood(taquito);
      assert.equal(false, taquito.clean);
    })

  });

});