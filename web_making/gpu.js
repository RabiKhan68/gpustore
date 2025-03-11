// script.js
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function proceedToCheckout() {
  const billingSection = document.getElementById('billing-info');
  billingSection.classList.remove('hidden');
}

function submitOrder(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  
  // Simulate order submission
  const orderDetails = {
    name,
    email,
    address,
    cart,
    totalPrice,
    date: new Date().toLocaleString(),
  };

  // Save the order to localStorage (simulating saving to a file)
  let savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
  savedOrders.push(orderDetails);
  localStorage.setItem('orders', JSON.stringify(savedOrders));

  // Display confirmation
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.textContent = `Thank you for your order, ${name}! Your order has been confirmed.`;
  
  // Hide billing info and cart
  document.getElementById('billing-info').classList.add('hidden');
  document.getElementById('cart').classList.add('hidden');
  
  // Show confirmation
  document.getElementById('order-confirmation').classList.remove('hidden');
}

function clearOrder() {
  // Reset cart and clear localStorage
  localStorage.removeItem('orders');
  cart = [];
  totalPrice = 0;
  updateCart();
  
  // Hide confirmation and show cart again
  document.getElementById('order-confirmation').classList.add('hidden');
  document.getElementById('cart').classList.remove('hidden');
}

function proceedToCheckout() {
  document.getElementById('billing-info').classList.add('active');
  document.getElementById('billing-info').classList.remove('hidden');
}

function submitOrder(event) {
  event.preventDefault();
  document.getElementById('billing-info').classList.add('hidden');
  document.getElementById('order-confirmation').classList.remove('hidden');
  document.getElementById('order-confirmation').classList.add('active');

  const name = document.getElementById('name').value;
  document.getElementById('confirmation-message').innerText = 
    `Thank you for your order, ${name}!`;
}

function clearOrder() {
  document.getElementById('order-confirmation').classList.add('hidden');
  document.getElementById('order-confirmation').classList.remove('active');
}

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });