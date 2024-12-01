    // JavaScript to rotate between the offer paragraphs every 5 seconds
    let currentOfferIndex = 0;
    const offers = document.querySelectorAll('.offer-paragraph');
    const offerInterval = 3000; // 3 seconds interval

    // Function to show the next offer
    function showNextOffer() {
        // Remove the 'active-offer' class from the current offer
        offers[currentOfferIndex].classList.remove('active-offer');

        // Move to the next offer, looping back to the first one if needed
        currentOfferIndex = (currentOfferIndex + 1) % offers.length;

        // Add the 'active-offer' class to the next offer
        offers[currentOfferIndex].classList.add('active-offer');
    }

    // Set the interval to change the offer every 3 seconds
    setInterval(showNextOffer, offerInterval);