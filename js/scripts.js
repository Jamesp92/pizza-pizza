// Bussiness logic

function Pizza(size,toppings,price) {
  this.size = size;
  this.toppings = toppings;
  this.priceArray =[];
};




Pizza.prototype.price = function () {
  
  let price = 10
  
  if (this.size === "x-small"){
    price -= 6;
  }
  else if (this.size === "small"){
 price -= 4;
  }
  else if (this.size === "medium"){
    price = 10;
  }
  else if (this.size === "large"){
    price += 4;
  }
  else if (this.size === "super duper extra big"){
    
    price += 35;
  }
  return price;
  
} 

// price.push(this.priceArray) ;
  
let newPizza = new Pizza ();

console.log(price)
console.log(newPizza)








  

