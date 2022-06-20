// Bussiness logic

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

function displayPizzaOrder(displayPizzaOrder) {
}
$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    event.preventDefault();
    let inputtedSize = $(".form-control#pizzaSlice").val();
    let inputtedToppings = $("input:checkbox[name=tops]:checked").val();
    let inputtedToppings2 = $("input:checkbox[name=tops2]:checked").val();
    let finalPizza = new Pizza(inputtedSize, inputtedToppings,inputtedToppings2);
   
    finalPizza.price();
  
    console.log(finalPizza);
  });
});
