 
// // Bussiness logic for orders
function Pizza(size) {
  this.size = size;
  this.pizzaPrice = 10;
 
};


/// UI LOGIC
        $(document).ready(function() {
          $("form#pizzaParlor").submit(function(event) {
            event.preventDefault();
            let toppingHolder = [];
            let toppingPrice = 0 ;
            
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
              toppingHolder.forEach(() => {
                        toppingPrice += 2;
                      });
              return this.pizzaPrice + toppingPrice ;
            }
          console.log(toppingHolder)
            console.log(toppingPrice)
            let inputtedSize = $(".form-control#pizzaSlice").val();
            let inputtedToppings = $("input:radio[name=tops]:checked").val();
            let inputtedToppings2 = $("input:radio[name=tops2]:checked").val();
            let finalPizza = new Pizza(inputtedSize);
            toppingHolder.push(inputtedToppings,inputtedToppings2)
            console.log(toppingHolder)
            console.log(finalPizza)
            $("#order").text("Your , " + " " + inputtedSize + " , "  +"pizza" + " with  , " + inputtedToppings  + " and " + " " + inputtedToppings2 +", will be $"+ finalPizza.price());
        
  });
});
