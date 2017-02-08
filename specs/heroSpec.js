var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe('Hero', function() {

  context("Hero's properties", function() {
    var peter = new Hero("Peter", "taquito");

    it('should have name', function() {
      assert.equal("Peter", peter.name);
    });

    it('should have favourite food', function() {
      assert.equal("taquito", peter.favouriteFood);
    });

    it('should be born healthy', function() {
      assert.equal(100, peter.health);
    });

    it('should have a belly', function() {
      assert.equal(0, peter.belly.length);
    })

  });

  context("Hero's methods", function() {
    var superWoman = new Hero("Kamila", "hearts of babies");
    var babyHeart = new Food("hearts of babies", 10);
    var taquito = new Food("taquito", 50);

    it('should introduce self', function() {
      assert.equal("My name is Kamila and I love to eat hearts of babies", superWoman.introduceSelf());
    });

    it('should be able to eat', function() {
      superWoman.eat(babyHeart);
      assert.equal(1, superWoman.belly.length);
    });

    it('should be able to replenish health', function() {
      superWoman.health = 10;
      superWoman.eat(taquito);
      assert.equal(60, superWoman.health);
    });

    it('should be able to replenish health by favourite food', function() {
      superWoman.health = 10;
      superWoman.eat(babyHeart);
      assert.equal(25, superWoman.health);
    });

    it('health should not exceed 100 by eating', function() {
      superWoman.health = 99;
      superWoman.eat(babyHeart);
      assert.equal(100, superWoman.health);
    });

  });

  context("Rat's poisoning", function () {
    var peter = new Hero("Peter", "taquito");
    var babyHeart = new Food("hearts of babies", 10);
    var taquito = new Food("taquito", 50);
    var stinky = new Rat("Stinky");

    it('can eat poisoned food', function() {
      stinky.touchFood(taquito);
      peter.eat(taquito);
      assert.equal(25, peter.health);
    });

    it('can die of food poisoning', function() {
      assert.equal("Hero died on food poisoning",peter.eat(taquito));
      assert.equal(0, peter.health);
    })

    it('can restore health', function() {
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      peter.eat(babyHeart);
      assert.equal(100, peter.health);
    })

  });

});