var cart = JSON.parse(localStorage.getItem('pokeshop_cart')) || [];

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    localStorage.setItem('pokeshop_cart', JSON.stringify(cart));
    updateDisplay();
}

function updateDisplay() {
    var total = 0;
    cart.forEach(item => total += item.prod_price);
    
    var display = document.getElementById("cart-total-top");
    if(display) display.innerText = "₱" + total.toLocaleString();
    
    var hiddenInput = document.getElementById("cust_order");
    if(hiddenInput) hiddenInput.value = JSON.stringify(cart);
}

document.addEventListener("DOMContentLoaded", updateDisplay);
