// Bussiness logic

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  
};


let price = 0;

Pizza.prototype.price = function () {
  

  if (this.size === "x-small"){
    price += 4;
  }
  else if (this.size === "small"){
  price += 6;
  }
  else if (this.size === "medium"){
   price += 10;
  }
  else if (this.size === "large"){
  price += 14;
  }
  else if (this.size === "super duper extra big"){
    
   price += 35;
  }
   
  return price ;
} 

let newPizza = new Pizza ("medium");


console.log(newPizza)
console.log(price)







  

