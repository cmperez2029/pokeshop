let cartArr = [];

function addToCart(pName, pPrice) {
    cartArr.push({ prod_name: pName, prod_price: pPrice });
    renderCart();
}

function remove(idx) {
    cartArr.splice(idx, 1);
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    const totalOut = document.getElementById("total-val");
    const hiddenInput = document.getElementById("cust_order");
    
    list.innerHTML = "";
    let sum = 0;
    
    cartArr.forEach((item, i) => {
        sum += item.prod_price;
        list.innerHTML += `<div class="d-flex justify-content-between border-bottom py-1">
            <span>${item.prod_name}</span>
            <button type="button" class="btn btn-sm text-danger" onclick="remove(${i})">x</button>
        </div>`;
    });
    
    totalOut.innerText = "₱" + sum.toLocaleString();
    hiddenInput.value = JSON.stringify(cartArr);
} 
