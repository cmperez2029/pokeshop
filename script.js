var cart = JSON.parse(localStorage.getItem('pokeshop_cart')) || [];

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    saveAndRefresh();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('pokeshop_cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartList = document.getElementById("cart-list");
    var totalDisplay = document.getElementById("cart-total");
    var hiddenOrderInput = document.getElementById("cust_order");
    
    if (!cartList) return;

    var total = 0;
    var html = "";

    cart.forEach((item, i) => {
        total += item.prod_price;
        html += `<li class="d-flex justify-content-between align-items-center mb-3 cart-item p-3 bg-light rounded border border-dark">
                    <span class="fw-bold">${item.prod_name}</span>
                    <div>
                        <span class="me-3 text-success">₱${item.prod_price.toLocaleString()}</span>
                        <button class="btn btn-sm btn-danger del-btn" onclick="removeFromCart(${i})">REMOVE</button>
                    </div>
                 </li>`;
    });

    cartList.innerHTML = html;
    totalDisplay.textContent = total.toLocaleString(undefined, { minimumFractionDigits: 2 });
    
    if (hiddenOrderInput) {
        hiddenOrderInput.value = JSON.stringify(cart);
    }
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
