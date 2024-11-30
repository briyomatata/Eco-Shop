// Function to handle the WhatsApp message creation and redirection
function sendToWhatsApp(productName, productPrice, productId) {
    // Get the quantity selected by the user
    var quantity = document.getElementById("quantity" + productId).value;
    var totalPrice = (productPrice * quantity).toFixed(2);  // Calculate total price

    // Create the message
    const message = `I'm interested in ${quantity} pieces of ${productName} making the total Price: ${totalPrice}.`;

    // Encode the message for URL compatibility
    var encodedMessage = encodeURIComponent(message);

    // Replace with the correct phone number (e.g., your WhatsApp number with country code)
    var phoneNumber = '254715599743'; // Replace with your WhatsApp phone number
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp with the encoded message
    window.location.href = whatsappUrl;
}



let currentParagraph = 1; // Track which paragraph is currently visible

function toggleParagraphs() {
  // Get the paragraph elements by ID
  const para1 = document.getElementById('para1');
  const para2 = document.getElementById('para2');
  
  // Toggle visibility
  if (currentParagraph === 1) {
    para1.style.display = 'none'; // Hide para1
    para2.style.display = 'block'; // Show para2
    currentParagraph = 2; // Update to show para2 next
  } else {
    para2.style.display = 'none'; // Hide para2
    para1.style.display = 'block'; // Show para1
    currentParagraph = 1; // Update to show para1 next
  }
}

// Set the toggle function to run every 3 seconds (3000ms)
setInterval(toggleParagraphs, 3000);

// Initially display the first paragraph
document.getElementById('para1').style.display = 'block';
