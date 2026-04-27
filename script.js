let cart = [];

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    
    let total = cart.reduce((sum, item) => sum + item.prod_price, 0);
    
    document.getElementById("cart-total-side").innerText = "₱" + total.toLocaleString();
    
    document.getElementById("cust_order").value = JSON.stringify(cart);
    
    console.log("Added:", name);
}
