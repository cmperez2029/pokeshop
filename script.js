let cart = [];

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const display = document.getElementById("cart-display");
    const totalDisplay = document.getElementById("total-price");
    const hiddenInput = document.getElementById("cust_order");

    display.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        display.innerHTML = '<p class="text-muted">Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.prod_price;
            display.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                    <small>${item.prod_name} - ₱${item.prod_price.toLocaleString()}</small>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">×</button>
                </div>`;
        });
    }

    totalDisplay.innerText = "₱" + total.toLocaleString();
    hiddenInput.value = JSON.stringify(cart);
}
