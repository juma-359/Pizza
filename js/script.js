
$(document).ready(function () {
    $("button#buy").click(function (event) {
         function buyNow(size, crust, topping, quantity) {
            this.size = size;
            this.prize = 0;
            this.crust = crust;
            this.topping = topping;
            this.quantity = quantity;

             size = ["small", "medium", "large"];
             crust = ["Crisp", "Stuffed", "Cheese-Stuffed Crust", "Neapolitan Crust", "Thin Crust", "Pizza Bagels", "Sicilian Style", "Flatbread"];
             topping = ["Green pepper", "Onions", "Saursage", "Bacon", "Extra cheese", "Black olives"];
             quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

        }
        var size = $("#size").val();
        var crust = $("#crust").val();
        var topping = $("#topping").val();
        var quantity = $("#quanty").val();
        var totalPrice = [];
       
        alert("You have ordered  ordered and the total is " + 7456 )
       
    });

      buyNow.prototype.Price = function(){
          if(this.size === size[0]){
              this.prize += 400;
          }
          else if(this.size === size[1]){
              this.size += 600;
          }
          else if(this.size === size[2]){
            this.size += 800;
        }
        if(this.crust === crust[0]){
            this.crust += 200;
        }
        else if(this.crust === crust[1]){
            this.crust += 250;
        }
        else if(this.crust === crust[2]){
            this.size += 300;
        }
        else if(this.crust === crust[3]){
            this.crust += 350;
        }
        else if(this.crust === crust[4]){
            this.crust += 400;
        }
        else if(this.crust === crust[5]){
            this.crust += 450;
        }
        else if(this.crust === crust[6]){
            this.crust += 500;
        }
        else if(this.crust === crust[7]){
            this.crust += 550;
        }
        if(this.topping === topping[0]){
            this.topping += 200;
        }
        else if(this.topping === topping[1]){
            this.topping += 250;
        }
        else if(this.topping === topping[2]){
            this.topping += 300;
        }
        else if(this.topping === topping[3]){
            this.topping += 350;
        }
        else if(this.topping === topping[4]){
            this.topping += 400;
        }
        else if(this.topping === topping[5]){
            this.topping += 450;
        }
        return this.price;
      }
     
      buyNow.prototype.totalCost = function(){
          var orderTotal = 0;
          for(var order =0; order < totalCosts.length; order++){
              orderTotal += totalCosts[order];
          }
          return orderTotal;
      }



});

