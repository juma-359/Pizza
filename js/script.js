$(document).ready(function() {
    var pizzaSizePrice = function() {
        var pizzaSize= $("#choose").val();
        return parseInt(pizzaSize);
    };
    var pizzaCrustPrice = function() {
    var pizzaCrust = $("chose").value();
        return parseInt(pizzaCrust);
    };

    var pizzaToppingsPrice = function () {
        var pizzaToppings = $("#flava").val();
        return parseInt (pizzaToppings);
    };

    var pizzaQuantityPrice = function(){
        var pizzaQuantity = $("#quantity").val();
        return parseInt(pizzaQuantity);
    };

});

var inputForUserOrder = new UserOrder (
    pizzaSizePrice(),
    pizzaCrustPrice(),
    pizzaToppingsPrice(),
    pizzaQuantityPrice()
);


