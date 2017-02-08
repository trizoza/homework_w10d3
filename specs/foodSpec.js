var assert = require('assert');
var Food = require('../food');

describe('Food', function() {

  context("Food's properties", function() {
    var taquito = new Food("taquito", 50);

    it('should have a name', function() {
      assert.equal("taquito", taquito.name);
    });

    it('should have a replenish value', function () {
      assert.equal(50, taquito.value);
    });

  });

});