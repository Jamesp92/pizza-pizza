// Bussiness logic

function pizzaPizza() {
  this.size = size;
  this.toppings = toppings;
};

pizzaPizza.prototype.price = function () {
 let price = 0;
 if (this.size === "x-small"){
  price = 4;
 }
 else if (this.size === "small"){
  price = 6;
 }
 else if (this.size === "medium"){
  price = 10;
 }
 else if (this.size === "large"){
  price = 14;
 }
 else (this.size === "super duper extra big") 
   price = 35;

 
};
