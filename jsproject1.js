//I am going to create a burger object.

var spicy = {
  name: "Spicy Burger",
  meat: "Angus Beef",
  toppings: "Lettuce, Tomato, Onion",
  dressing: "Mayo, Siriracha",
  price: 5.00
}

//I am going to use a function called populate to place those items on the screen using innerHTML
function populate() {
  document.getElementById('burger1name').innerHTML = spicy.name;
  document.getElementById('burger1meat').innerHTML = spicy.meat;
  document.getElementById('burger1toppings').innerHTML = spicy.toppings;
  document.getElementById('burger1dressing').innerHTML = spicy.dressing;
  document.getElementById('burger1price').innerHTML = spicy.price;
}