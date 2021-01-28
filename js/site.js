var total = 0;
$("button").click(function() {
    total += Number($(this).val()); 
    alert("Add to Cart"); 
    $("#cost").text("$"+total.toFixed(2));
});
