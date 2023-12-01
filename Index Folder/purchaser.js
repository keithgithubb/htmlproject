// Set your public Stripe API key
const stripe = Stripe('your_public_stripe_key');

// Handle the purchase function
function makePurchase() {
    // Retrieve form data (e.g., product details, quantity, etc.)
    const formData = {};

    // Make an AJAX request to your server to handle the payment
    fetch('/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(session => {
        // Redirect to the Stripe Checkout page
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(result => {
        if (result.error) {
            // Handle any errors that occur during the redirect
            console.error(result.error.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
