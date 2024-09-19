document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const paymentMethod = document.getElementById('payment-method').value;
    let successMessage = '';

    // Determine success message based on payment method
    if (paymentMethod === 'cod') {
        successMessage = 'Order placed successfully! Thank you for choosing Cash on Delivery.';
    } else if (paymentMethod === 'credit-debit-card') {
        successMessage = 'Payment Successful! Thank you for your purchase.';
    }

    alert(successMessage); // Show alert with success message

    // Optionally reset the form
    this.reset();
});

document.getElementById('payment-method').addEventListener('change', function() {
    const cardDetails = document.getElementById('card-details');
    const payButton = document.querySelector('button[type="submit"]');

    if (this.value === 'cod') {
        cardDetails.classList.add('hidden'); // Hide card details for COD
        payButton.textContent = 'Submit'; // Change button text to Submit for COD
    } else if (this.value === 'credit-debit-card') {
        cardDetails.classList.remove('hidden'); // Show card details for credit/debit card
        payButton.textContent = 'Pay Now'; // Change button text to Pay Now for card payment
    }
});
