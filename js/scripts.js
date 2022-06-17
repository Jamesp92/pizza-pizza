// Bussiness logic

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
};

//  $(document) .ready (function() {
  let toppingPrice = 0;
  let toppingHolder = [];
  let topping = '';
Pizza.prototype.price = function () {
  let price = 0;
  if (this.size === "x-small - $4"){
    price = 4;
  }
  else if (this.size === "small -$6"){
    price = 6;
  }
  else if (this.size === "medium - 10"){
    price = 10;
  }
  else if (this.size === "large - $14"){
    price = 14;
  }
  else if (this.size === "super duper extra big - $35"){
    
    price = 35;
  }
  return  price;
} 
let newPizza = new Pizza ("medium");

newPizza.price();
console.log(newPizza)
 $("input:checkbox").click(function() {
    
  toppingHolder.push(parseInt($(this).val()))
  topping = $(this).attr('id')
  console.log(topping)
  
  topPrice = topHolder.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  })
});




  

