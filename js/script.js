$(document).ready(function () {
    $("button#buy").click(function (event) {
         function buyNow(size, crust, topping, quantity) {
            this.size = size;
            this.prize = 0;
            this.crust = crust;
            this.topping = topping;
            this.quanty = quantity;

            if (this.size == size[0]){
                return this.size += "600";
            }

             size = ["small", "medium", "large"];
             crust = ["Crisp", "Stuffed", "Cheese-Stuffed Crust", "Neapolitan Crust", "Thin Crust", "Pizza Bagels", "Sicilian Style", "Flatbread"];
             topping = ["Green pepper", "Onions", "Saursage", "Bacon", "Extra cheese", "Black olives"];

        }
        var size = parseInt($("#size").val());
        var crust = parseInt($("#crust").val());
        var topping = parseInt($("#topping").val());
        var quanty = parseInt($("#quanty").val());
        var totalPrice = 0;
       
         totalPrice = size + crust + topping *quanty;
        alert("You have ordered a pizza size equivalent to " + size + " and the crust is equal to " + crust + " while the toppings is equal to " + topping + " and the total prize is " + totalPrice)
        
       
    });

      buyNow.prototype.Price = function(){
          if(this.size === size[0]){
              this.prize += 600;
          }
          else if(this.size === size[1]){
              this.size += 800;
          }
          else if(this.size === size[2]){
            this.size += 1000;
        }
        if(this.crust === crust[0]){
            this.crust += 100;
        }
        else if(this.crust === crust[1]){
            this.crust += 200;
        }
        else if(this.crust === crust[2]){
            this.size += 300;
        }
        else if(this.crust === crust[3]){
            this.crust += 400;
        }
        else if(this.crust === crust[4]){
            this.crust += 500;
        }
        else if(this.crust === crust[5]){
            this.crust += 600;
        }
        else if(this.crust === crust[6]){
            this.crust += 700;
        }
        else if(this.crust === crust[7]){
            this.crust += 800;
        }
        if(this.topping === topping[0]){
            this.topping += 10;
        }
        else if(this.topping === topping[1]){
            this.topping += 20;
        }
        else if(this.topping === topping[2]){
            this.topping += 30;
        }
        else if(this.topping === topping[3]){
            this.topping += 40;
        }
        else if(this.topping === topping[4]){
            this.topping += 50;
        }
        else if(this.topping === topping[5]){
            this.topping += 60;
        }
        return totalPrice;
      }
     
      buyNow.prototype.totalCost = function(){
          var orderTotal = 0;
          for(var order =0; order < totalCosts.length; order++){
              orderTotal += totalCosts[order];
          }
          return orderTotal;
      }



});

