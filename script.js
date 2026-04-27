let cart = [];
const cartCount = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');
const orderInput = document.getElementById('cust_order_input');

function updateCart() {
    let total = 0;
    cart.forEach(item => {
        total += item.prod_price;
    });
    
    if(totalPriceElement) totalPriceElement.innerText = "Total: P" + total;
    cartCount.innerText = cart.length;
    orderInput.value = JSON.stringify(cart);
}

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('order-form').onsubmit = function(e) {
    if (cart.length === 0) {
        e.preventDefault();
        alert("Your cart is empty!");
    }
};
