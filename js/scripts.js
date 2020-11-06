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

Pizza.prototype.addToppings = function(toppings) {
  this.toppingsList.push(toppings);
  this.toppingsQuantity += this.toppingsList.length;
}

Pizza.prototype.calcTotalCost = function () {
  if (this.size === "xtra-large") { // if/else for price adjustment based on size
    this.totalCost += 14;
  } else if (this.size === "large") {
    this.totalCost += 12;
  } else if (this.size === "medium") {
    this.totalCost += 10;
  } else if (this.size === "small") {
    this.totalCost += 8;
  }
  
  if (this.toppingsQuantity >= 6) { // if/else for pirce adjustment based on topping quantity
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
  return this.totalCost
}

// User Interface Logic //

$(document).ready(function() {
  let pizzaOrder = new Pizza(); // Pizza constructor for order

  $("form#orderForm").submit(function(event) {
    event.preventDefault;

    let pizzaSize = $("input:radio[name=size]:checked").val(); // Get value of pizza size from user
    pizzaOrder.addSize(pizzaSize);  // Push size to Pizza object

    $("input:checkbox[name=topping]:checked").each(function() { // Collect data from checkboxes
      toppingsArray = $(this).val();
      pizzaOrder.addToppings(toppingsArray); // Push checkbox data to pizza object
    });
    
    let total = pizzaOrder.calcTotalCost();
    $("#receipt").text(total); // Print total 

    console.log(pizzaOrder);
  });
});
