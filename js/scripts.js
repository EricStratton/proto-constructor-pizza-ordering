// Business Logic //

function Pizza() {
  this.size = "";
  this.toppingsQuantity = 0;
  this.toppingsList = [];
  this.totalCost = 0;
}


Pizza.prototype.addSize = function(size) {
  this.size += size;
}

Pizza.prototype.addToppings = function(toppings, quantity) {
  this.toppingsList.push(toppings);
  this.toppingsQuantity += quantity;
}

Pizza.prototype.calcTotalCost = function () {
  if (this.toppingsQuantity >= 6) {
    this.totalCost += 12;
  } else if (this.toppingsQuantity === 5) {
      this.totalCost += 10; 
  } else if (this.toppingsQuantity === 4) {
      this.totalCost += 8;
  } else if (this.toppingsQuantity === 3) {
      this.totalCost += 6;
  } else {
      this.totalCost += 0;
  }
}

// function Toppings() {
//   this.artichoke = artichoke;
//   this.blackOlives = blackOlives;
//   this.tomatoes = tomatoes;
//   this.pepperoncini = pepperoncini;
//   this.kalamata = kalamata;
//   this.balsamic = balsamic;
// }

// User Interface Logic //

$(document).ready(function() {
  let pizzaOrder = new Pizza();

  $("#orderForm").submit(function(event) {
    event.preventDefault;

    let pizzaSize = $("input:radio[name=size]:checked").val();
    console.log(pizzaSize);
    let quantity = $("input:checkbox[name=toppings]:checked").val();
    console.log(quantity);

    pizzaOrder.addSize(pizzaSize);
    pizzaOrder.addToppings(quantity);

  });


});
