//I am going to create a burger object.

var spicy = {
  name: "Spicy Burger",
  meat: "Angus Beef",
  toppings: "Lettuce, Tomato, Onion",
  dressing: "Mayo, Siriracha",
  price: 12.95
}


function final1() {
  var tax = 1.04712;
  var a = (12.95 * tax).toFixed(2);
  document.getElementById('burger1total').innerHTML =  "Your total is" + " " + a
}

function final2() {
  var tax = 1.04712;
  var b = (10.95 * tax).toFixed(2);
  document.getElementById('burger2total').innerHTML = ("Your total is" + " " + b)
}

var mild = {
  name: "The Mild Burger",
  meat: "Turkey",
  toppings: "Lettuce, Tomato, Onion",
  dressing: "Mayo, Mustard",
  price: 10.95
}

//I am going to use a function called populate to place those items on the screen using innerHTML
function populate() {
  document.getElementById('burger1name').innerHTML = spicy.name;
  document.getElementById('burger1meat').innerHTML = spicy.meat;
  document.getElementById('burger1toppings').innerHTML = spicy.toppings;
  document.getElementById('burger1dressing').innerHTML = spicy.dressing;
  document.getElementById('burger1price').innerHTML = spicy.price;
  
 
}

function yummy() {
  document.getElementById('burger2name').innerHTML = mild.name;
  document.getElementById('burger2meat').innerHTML = mild.meat;
  document.getElementById('burger2toppings').innerHTML = mild.toppings;
  document.getElementById('burger2dressing').innerHTML = mild.dressing;
  document.getElementById('burger2price').innerHTML = mild.price;
}

