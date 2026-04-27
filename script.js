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
  var hiddenOrderInput = document.getElementById("cust_order");
  
  var total = 0;
  var html = "";
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].prod_price;
    html += "<li class='d-flex justify-content-between align-items-center mb-3 cart-item'>";
    html += "<span>" + cart[i].prod_name + " - ₱" + cart[i].prod_price.toLocaleString() + "</span>";
    html += "<button class='btn btn-sm btn-danger del-btn' onclick='removeFromCart(" + i + ")'>&times;</button>";
    html += "</li>";
  }

  cartList.innerHTML = html;
  totalDisplay.textContent = total.toLocaleString(undefined, { minimumFractionDigits: 2 });
  
  if (hiddenOrderInput) {
    hiddenOrderInput.value = JSON.stringify(cart);
  }
}
