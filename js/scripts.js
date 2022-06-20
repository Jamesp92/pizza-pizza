 
//  // Business Logic for orderBook ---------
// function pizzaBook (pizzas,currentId) {
//   this.pizzas = {};
//   this.currentId = 0;
// }
 
// pizzaBook.prototype.addPizza = function(pizza) {
//   pizza.id = this.assignId();
//   this.pizzas[pizza.id] = pizza;
// };

//  pizzaBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };


// // Bussiness logic for orders

function Pizza(size,toppings,toppings2,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.toppings2 = toppings2
  this.pizzaPrice = 10 ;
  this.toppingTotal = 0;
};



Pizza.prototype.price = function () {
 
  if (this.size === "x-small"){
    this.pizzaPrice -= 6;
  }
  else if (this.size === "small"){
    this.pizzaPrice -= 4;
  }
  else if (this.size === "medium"){
    this.pizzaPrice = 10;
  }
  else if (this.size === "large"){
    this.pizzaPrice += 4;
  }
  else if (this.size === "super duper extra big"){
    
    this.pizzaPrice += 35;
  }
  return this.pizzaPrice;
}


Pizza.prototype.toppingPrice = function () {
  
  if (this.toppings === "Mushrooms"){
      this.toppingTotal +=1
    }
    else if (this.toppings === "peperoni"){
        this.toppingTotal +=1
}
else if (this.toppings === "Jalepenos"){
  this.toppingTotal +=1
}
  return this.toppingTotal;
}






// function displayPizzaOrder(displayPizzaOrder) {
// }

$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    event.preventDefault();
    let inputtedSize = $(".form-control#pizzaSlice").val();
    let inputtedToppings = $("input:radio[name=tops]:checked").val();
    let inputtedToppings2 = $("input:radio[name=tops2]:checked").val();
    let finalPizza = new Pizza(inputtedSize, inputtedToppings,inputtedToppings2);
    
  $("#order").text("Your," + " " + inputtedSize + " , "  +"pizza" + " with  , " + inputtedToppings + " , and , " + inputtedToppings2 + " , will be $"+ finalPizza.price());
    finalPizza.price()
    
    console.log(finalPizza);
    
  
  });
});
