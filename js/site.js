let total = 0;
let item = "";
let orderno = "asdf";

$("button").click(function() {
    total += Number($(this).val()); 
    item += this.id;
    $(this).text("Added to Cart");
    $(this).css("background-color","green")
    /*alert("Added to Cart");*/
    $("#cost").text("$"+total.toFixed(2));
    $("#item").text(item);
});

/*$("#order").click(function() {
    orderno = date.now();
    alert(orderno); 
    gtag('event','purchase',{
        "transaction": orderno,
        "affiliation": "Rockets red glare",
        "value": total,
        "currency": "USD",
        "tax":0.00,
        "shipping":0.00,
        "items": [
            {
                "id": item,
                "name": "RRG" + item,
                "list_name": "Search Results",
                "brand": "RRG",
                "category": "rockets",
                "variant": item,
                "listposition": 1,
                "quantity": 1,
                "price": total
            }
        ]
    });        
});*/


$("#order").click(function() {
    orderno = Date.now();
    /*alert(orderno);*/
    gtag('event', 'purchase', {
        "transaction_id": orderno,
        "affiliation": "Rockets Red Glare",
        "value": total,
        "currency": "USD",
        "tax": 0,
        "shipping": 0,
        "items": [
          {
            "id": item,
            "name": "RRG Rocket",
            "list_name": "Search Results",
            "brand": "RRG",
            "category": "Rockets",
            "variant": item,
            "list_position": 1,
            "quantity": 1,
            "price": total
          }
        ]
      }); 
});

