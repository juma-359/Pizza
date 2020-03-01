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

var totalPrice = 
(inputForUserOrder.size + inputForUserOrder.crust + inputForUserOrder.toppings ) * inputForUserOrder.quantity;
if(totalPrice > 0) {
    alert("You spend total amount of ksh" + totalPrice);
}


var delivery = confirm("for an delivery we charge additional ksh. 200 and we can deliver at your door step in few minutes");
if (delivery === true) {
    for(;;){
        var location = prompt ("kindly let us know where to deliver for you your pizza")
        if (location !== "") {
            alert("your pizza will be delivered at " + location + " thank you for choosing us and always at your service");
            else {
                alert("please to recieve your pittza enter a valid location")
            };
        };
        alert("Now your total amount is ksh" + " totalPrice" + " ksh 200");
        else {
            alert("Thank you for choosing victorious pizzas we are here for you  you will pass by at our restaurant and pick your pizza");
        }
    };
};


