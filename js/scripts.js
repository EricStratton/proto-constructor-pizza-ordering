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

// User Interface Logic //

$(document).ready(function() {
  let pizzaOrder = new Pizza();

  $("form#orderForm").submit(function(event) {
    event.preventDefault;

    let pizzaSize = $("input:radio[name=size]:checked").val(); // Get value of pizza size from user
    console.log(pizzaSize);
    // let quantity = parseInt($("input[type=checkbox]:checked").val());
    // console.log(quantity);

    $("input:checkbox[name=topping]:checked").each(function() {
      let toppingsArray = $(this).val();
      let quantity = toppingsArray.length;
      pizzaOrder.addToppings(toppingsArray, quantity)
    });

    pizzaOrder.addSize(pizzaSize);
    // pizzaOrder.addToppings("artichoke", quantity);

    console.log(pizzaOrder);
  });
});
