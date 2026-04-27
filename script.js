let cart = [];

function addToCart(name, price) {
    const item = { prod_name: name, prod_price: price };
    cart.push(item);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total-price");
    const hiddenInput = document.getElementById("cust_order");
    
    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.prod_price;
        list.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-1">
                <span>${item.prod_name} - ₱${item.prod_price.toLocaleString()}</span>
                <button class="btn btn-sm text-danger" onclick="removeItem(${index})">Remove</button>
            </div>`;
    });

    totalDisplay.innerText = "₱" + total.toLocaleString();
    hiddenInput.value = JSON.stringify(cart);
}
