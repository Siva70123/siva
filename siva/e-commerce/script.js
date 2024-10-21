let totalPrice = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Add product to cart
        const cartItems = document.getElementById('cart-items');
        const listItem = document.createElement('li');
        listItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);

        // Update total price
        totalPrice += productPrice;
        document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
    });
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    if (totalPrice > 0) {
        alert(`Thank you for your purchase! Total amount: $${totalPrice.toFixed(2)}`);
        document.getElementById('cart-items').innerHTML = ''; // Clear cart
        document.getElementById('total-price').innerText = 'Total: $0'; // Reset total price
        totalPrice = 0;
    } else {
        alert('Your cart is empty!');
    }
});
