 
// // Bussiness logic for orders

function Pizza(size) {
  this.size = size;
  this.pizzaPrice = 10;

};


/// UI LOGIC
        $(document).ready(function() {
          $("form#pizzaParlor").submit(function(event) {
            event.preventDefault();
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
              } else{
                this.pizzaPrice
              }
              return this.pizzaPrice;
            }
            let inputtedSize = $(".form-control#pizzaSlice").val();
            let inputtedToppings = $("input:radio[name=tops]:checked").val();
            let inputtedToppings2 = $("input:radio[name=tops2]:checked").val();
            let finalPizza = new Pizza(inputtedSize);
            
        
              this.toppingArray = [inputtedToppings,inputtedToppings2];
              this.toppingsPrice = 0;
              this.toppingArray.forEach(() => {
                this.toppingsPrice += 2;
              });
              console.log(this.toppingsPrice)
              console.log(this.toppingArray)
            
          
            
            $("#order").text("Your , " + " " + inputtedSize + " , "  +"pizza" + " with  , " + inputtedToppings + " , and , " + inputtedToppings2 + " , will be $"+ finalPizza.price());
        
  });
});
