// Business Logic //

function Pizza() {
  this.toppings = [];
  this.size = [];
}

Pizza.prototype.addSize = function(size) {
  this.size.push(size);
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}

// function Toppings() {
//   this.artichoke = artichoke;
//   this.blackOlives = blackOlives;
//   this.tomatoes = tomatoes;
//   this.pepperoncini = pepperoncini;
//   this.kalamata = kalamata;
//   this.balsamic = balsamic;
// }