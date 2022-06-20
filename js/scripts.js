// Bussiness logic

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
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
let newPizza = new Pizza ("large");


console.log(newPizza)








  

