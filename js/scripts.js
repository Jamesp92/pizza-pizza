 
 // Business Logic for orderBook ---------
function OrderBook (pizzas,currentId) {
  this.pizzas = {};
  this.currentId = 0;
}
 
OrderBook.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

 OrderBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};


// Bussiness logic for orders

function Pizza(size,toppings,toppings2,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.toppings2 = toppings2
  this.pizzaPrice = 10 ;
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


// Pizza.prototype.toppingPrice = function () {
  
  // if (this.topping === "Mushrooms"){
    //   this.pizzaPrice +=1
    // }
    // else if (this.topping === "peperoni"){
      //   this.pizzaPrice +=1
// }
// else if (this.topping === "Jalepenos"){
//   this.pizzaPrice +=1
// }
//   return this.pizzaPrice;
// }






// function displayPizzaOrder(displayPizzaOrder) {
// }
let newOrder = new OrderBook ();

$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    event.preventDefault();
    let inputtedSize = $(".form-control#pizzaSlice").val();
    let inputtedToppings = $("input:radio[name=tops]:checked").val();
    let inputtedToppings2 = $("input:radio[name=tops2]:checked").val();
    let finalPizza = new Pizza(inputtedSize, inputtedToppings,inputtedToppings2);
    
    // finalPizza.price()
    OrderBook.addPizza(finalPizza);
    console.log(OrderBook.contacts);
    console.log(finalPizza,this.pizzas);
    
  });
});
