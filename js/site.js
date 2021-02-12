var total = 0;
var item = "";

$("button").click(function() {
    total += Number($(this).val()); 
    item += this.id;
    $(this).text("Added to Cart");
    $(this).css("background-color","green")
    /*alert("Added to Cart");*/
    $("#cost").text("$"+total.toFixed(2));
    $("#item").text(item);
});



