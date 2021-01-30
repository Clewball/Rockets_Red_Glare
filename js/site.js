var total = 0;
var option1 = false;
var option2 = false;
var option3 = false;
$("button").click(function() {
    total += Number($(this).val()); 
    $(this).text("Added to Cart");
    $(this).css("background-color","green")
    /*alert("Added to Cart");*/
    $("#cost").text("$"+total.toFixed(2));
});
