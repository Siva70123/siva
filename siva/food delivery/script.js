let totalPrice = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').innerText;
        const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

        // Add item to cart
        const cartItems = document.getElementById('cart-items');
        const listItem = document.createElement('li');
        listItem.innerText = `${itemName} - $${itemPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);

        // Update total price
        totalPrice += itemPrice;
        document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
    });
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    if (totalPrice > 0) {
        alert(`Thank you for your order! Total amount: $${totalPrice.toFixed(2)}`);
        document.getElementById('cart-items').innerHTML = ''; // Clear cart
        document.getElementById('total-price').innerText = 'Total: $0'; // Reset total price
        totalPrice = 0;
    } else {
        alert('Your cart is empty!');
    }
});
