var Hero = function(name, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.belly = [];
};

Hero.prototype.introduceSelf = function() {
  return "My name is " + this.name + " and I love to eat " + this.favouriteFood;
};

Hero.prototype.eat = function(food) {
  this.belly.push(food);
  if (food.clean === true) {
    if (food.name === this.favouriteFood) {
      this.health += 1.5 * food.value;
    }
    else {
      this.health += food.value;
    }
    if (this.health > 100) {
      this.health = 100;
    }
  }
  else {
    if (food.name === this.favouriteFood) {
      this.health -= 1.5 * food.value;
    }
    else {
      this.health -= food.value;
    }
    if (this.health < 0) {
      this.health = 0;
      return "Hero died on food poisoning";
    }
  }

}

module.exports = Hero;