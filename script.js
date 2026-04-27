let cartArr = [];

function addToCart(name, price) {
    cartArr.push({ prod_name: name, prod_price: price });
    updateCart();
}

function removeItem(idx) {
    cartArr.splice(idx, 1);
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart-list");
    const total = document.getElementById("total-val");
    const orderInput = document.getElementById("cust_order");

    if(!list) return;

    list.innerHTML = "";
    let sum = 0;

    cartArr.forEach((item, i) => {
        sum += item.prod_price;
        list.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom py-1">
                <small>${item.prod_name}</small>
                <button type="button" class="btn btn-sm text-danger" onclick="removeItem(${i})">x</button>
            </div>`;
    });

    total.innerText = "₱" + sum.toLocaleString() + ".00";
    if(orderInput) {
        orderInput.value = JSON.stringify(cartArr);
    }
}
