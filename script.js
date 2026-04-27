let cart = [];
function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    let total = cart.reduce((s, i) => s + i.prod_price, 0);
    document.getElementById("total").innerText = "₱" + total.toLocaleString();
    document.getElementById("cust_order").value = JSON.stringify(cart);
}
