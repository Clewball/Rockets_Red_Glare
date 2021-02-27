let items = [
    'Gnome', 'GreenEggs', 'BigDaddy', 'ExplorerAquarius',
    'C11-0', 'D12-0', 'D12-5', 'E12-0',
    'PortaPadII', 'PortaPadIIBlue', 'PortaPadBrown', 'PortaPadEBlack'
            ];

let itemids = [
    'rocket1', 'rocket2', 'rocket3', 'rocket4',
    'engine1', 'engine2', 'engine3', 'engine4',
    'launchpad1', 'launchpad2', 'launchpad3', 'launchpad4'
            ];       

let total = 0;
let item = "";
let itemid = "";
let orderno = "asdf";  /* variable set asdf for debugging only*/

$(".option").click(function() {
    total += Number($(this).val()); 
    item += items[this.id] + "/";
    itemid += itemids[this.id];
    $(this).text("Added to Cart");
    $(this).css("background-color","green")
    $("#cost").text("$"+total.toFixed(2));
    $("#item").text(item);
    /*console.log(itemid);*/
});


/* Send Transaction to Google */
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
            "id": itemid,
            "name": "RRG Rocket",    /* for future reference this is product description */
            "list_name": "Search Results",
            "brand": "RRG",
            "category": "Rockets",
            "variant": itemid,
            "list_position": 1,
            "quantity": 1,
            "price": total
          }
        ]
      }); 
      window.location.href = "success.html";  
});

