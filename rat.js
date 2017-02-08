var Rat = function(name) {
  this.name = name;
};

Rat.prototype.touchFood = function(food) {
  food.clean = false;
};

module.exports = Rat;