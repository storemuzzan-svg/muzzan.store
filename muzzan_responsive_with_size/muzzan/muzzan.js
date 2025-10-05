function buyNow(productName, price) {
  const phoneNumber = "91xxxxxxxxxx"; // Replace with your WhatsApp number
  const message = `Hello, I am interested in buying: ${productName} for ₹${price}. Please provide more details.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

function scrollToCollection() {
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}
const phoneNumber = "91xxxxxxxxxx";
