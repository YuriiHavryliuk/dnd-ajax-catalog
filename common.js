
var request = new XMLHttpRequest();
request.open('GET', 'new.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var data1 = data.cats;
    var temp = document.getElementsByTagName("template")[0];
    var item = temp.content.querySelector(".product__item");
  
    for (var i = 0; i < data1.length; i++) {
      
      var cloneNode = document.importNode(item, true);
      var products = document.querySelector(".product");
      products.appendChild(cloneNode);
      
      var price = document.querySelectorAll('.product__price');
      var name = document.querySelectorAll('.product__name');
      var category = document.querySelectorAll('.product__category');
      var product__url = document.querySelectorAll(".product__img");
      
       price[i].innerHTML = data1[i].price;
       name[i].innerHTML = data1[i].name;
       category[i].innerHTML = data1[i].category;
       product__url[i].src = data1[i].img_url;
       product__url[i].alt = "Cat-" + i;
    }
  } else {

  }

};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();