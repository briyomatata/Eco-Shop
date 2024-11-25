// Function to handle the WhatsApp message creation and redirection
function sendToWhatsApp(productName, productPrice, productId) {
    // Get the quantity selected by the user
    var quantity = document.getElementById("quantity" + productId).value;
    var totalPrice = (productPrice * quantity).toFixed(2);  // Calculate total price

    // Create the message
    const message = `I'm interested in ${productName}. Price: ${totalPrice}.`;

    // Encode the message for URL compatibility
    var encodedMessage = encodeURIComponent(message);

    // Replace with the correct phone number (e.g., your WhatsApp number with country code)
    var phoneNumber = '254715599743'; // Replace with your WhatsApp phone number
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp with the encoded message
    window.location.href = whatsappUrl;
}
