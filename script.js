var cart = [];

function addToCart(name, price) {
  cart.push({ prod_name: name, prod_price: price });
  updateCartDisplay();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  var cartList = document.getElementById("cart-list");
  var totalDisplay = document.getElementById("cart-total");
  var total = 0;
  var html = "";

  for (var i = 0; i < cart.length; i++) {
    total += cart[i].prod_price;
    html += "<li>" + cart[i].prod_name + " - ₱" + cart[i].prod_price.toFixed(2);
    html += " <button onclick='removeFromCart(" + i + ")'>Remove</button></li>";
  }

  cartList.innerHTML = html;
  totalDisplay.textContent = total.toFixed(2);
}

function submitOrder() {
  var name = document.getElementById("cust_name").value;
  var email = document.getElementById("cust_email").value;
  var addr = document.getElementById("cust_addr").value;
  var order = JSON.stringify(cart);

}
