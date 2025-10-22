// Crypto Price Comparison Extension - Main JavaScript

// API Configuration
const API_BASE = 'http://localhost:8000';

// Sample data (for demo when backend is not running)
const SAMPLE_PRODUCTS = {
  'iphone 15': [
    { name: 'iPhone 15 Pro Max 256GB', price: 1199, originalPrice: 1299, store: 'Amazon', rating: 4.6, discount: 8, availability: 'In Stock' },
    { name: 'iPhone 15 Pro Max 256GB', price: 1149, originalPrice: 1299, store: 'Flipkart', rating: 4.7, discount: 12, availability: 'Limited Stock', bestDeal: true },
    { name: 'iPhone 15 Pro Max 256GB', price: 1189, originalPrice: 1299, store: 'BestBuy', rating: 4.5, discount: 9, availability: 'In Stock' }
  ],
  'airpods': [
    { name: 'AirPods Pro (2nd Gen)', price: 249, originalPrice: 279, store: 'Amazon', rating: 4.8, discount: 11, availability: 'In Stock' },
    { name: 'AirPods Pro (2nd Gen)', price: 239, originalPrice: 279, store: 'Flipkart', rating: 4.7, discount: 14, availability: 'In Stock', bestDeal: true }
  ],
  'macbook': [
    { name: 'MacBook Pro 14" M3', price: 1999, originalPrice: 2199, store: 'Amazon', rating: 4.9, discount: 9, availability: 'In Stock', bestDeal: true },
    { name: 'MacBook Pro 14" M3', price: 2049, originalPrice: 2199, store: 'Flipkart', rating: 4.8, discount: 7, availability: 'In Stock' }
  ],
  'headphones': [
    { name: 'Sony WH-1000XM5', price: 399, originalPrice: 449, store: 'Amazon', rating: 4.8, discount: 11, availability: 'In Stock' },
    { name: 'Sony WH-1000XM5', price: 379, originalPrice: 449, store: 'Flipkart', rating: 4.7, discount: 16, availability: 'In Stock', bestDeal: true }
  ]
};

const CRYPTO_PRICES = {
  bitcoin: { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 2.4, icon: '₿' },
  ethereum: { symbol: 'ETH', name: 'Ethereum', price: 2280, change: -1.2, icon: 'Ξ' },
  tether: { symbol: 'USDT', name: 'Tether', price: 1.00, change: 0.0, icon: '₮' },
  litecoin: { symbol: 'LTC', name: 'Litecoin', price: 72.50, change: 3.8, icon: 'Ł' }
};

let selectedProduct = null;
let cryptoPrices = { ...CRYPTO_PRICES };

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initializeExtension();
});

function initializeExtension() {
  console.log('Initializing Crypto Price Compare Extension...');

  // Setup event listeners
  setupEventListeners();

  // Load crypto prices
  loadCryptoPrices();

  // Start price updates
  startPriceUpdates();
}

function setupEventListeners() {
  // Search button
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', () => handleSearch());
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // Quick search tags
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      const query = e.target.dataset.query;
      searchInput.value = query;
      handleSearch();
    });
  });

  // Modal close
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('payment-modal');

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function loadCryptoPrices() {
  const ticker = document.getElementById('crypto-ticker');

  // Display crypto prices
  ticker.innerHTML = '';

  Object.entries(cryptoPrices).forEach(([id, crypto]) => {
    const tickerItem = createTickerItem(crypto);
    ticker.appendChild(tickerItem);
  });
}

function createTickerItem(crypto) {
  const item = document.createElement('div');
  item.className = 'ticker-item';

  const isPositive = crypto.change >= 0;
  const changeClass = isPositive ? 'up' : 'down';
  const arrow = isPositive ? '▲' : '▼';

  item.innerHTML = `
    <span class="crypto-symbol">${crypto.icon}</span>
    <span class="crypto-name">${crypto.symbol}</span>
    <span class="crypto-price">$${formatPrice(crypto.price)}</span>
    <span class="crypto-change ${changeClass}">${arrow} ${Math.abs(crypto.change).toFixed(2)}%</span>
  `;

  return item;
}

function formatPrice(price) {
  if (price >= 1000) {
    return price.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }
  return price.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

function startPriceUpdates() {
  // Update crypto prices every 5 seconds with small variations
  setInterval(() => {
    Object.keys(cryptoPrices).forEach(id => {
      const variation = (Math.random() - 0.5) * 100; // ±$50
      cryptoPrices[id].price += variation;
      cryptoPrices[id].change = (Math.random() - 0.5) * 5; // ±2.5%
    });

    loadCryptoPrices();

    // Flash animation
    document.querySelectorAll('.ticker-item').forEach(item => {
      item.classList.add('flash');
      setTimeout(() => item.classList.remove('flash'), 500);
    });
  }, 5000);
}

async function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return;

  console.log('Searching for:', query);

  // Show loading state
  showLoadingState();

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Find matching products
  let products = [];

  for (const [key, items] of Object.entries(SAMPLE_PRODUCTS)) {
    if (query.includes(key) || key.includes(query)) {
      products = items;
      break;
    }
  }

  // If no exact match, show first category
  if (products.length === 0) {
    products = SAMPLE_PRODUCTS['iphone 15'];
  }

  displayProducts(products);
}

function showLoadingState() {
  document.getElementById('welcome-state').classList.add('hidden');
  document.getElementById('loading-state').classList.remove('hidden');
  document.getElementById('products-container').classList.add('hidden');
}

function displayProducts(products) {
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('welcome-state').classList.add('hidden');

  const container = document.getElementById('products-container');
  container.classList.remove('hidden');
  container.innerHTML = '';

  // Calculate savings
  const prices = products.map(p => p.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const savings = maxPrice - minPrice;

  if (savings > 0) {
    const savingsBanner = document.createElement('div');
    savingsBanner.className = 'savings-banner';
    savingsBanner.textContent = `💰 Save up to $${savings.toFixed(2)} by choosing the best deal!`;
    container.appendChild(savingsBanner);
  }

  // Create product cards
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = `product-card${product.bestDeal ? ' best-deal' : ''}`;

  const discount = product.discount || 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  card.innerHTML = `
    ${product.bestDeal ? '<div class="best-deal-badge">🏆 Best Deal</div>' : ''}
    ${discount > 0 ? `<div class="discount-badge">${discount}% OFF</div>` : ''}

    <div class="product-image">📦</div>

    <div class="store-badge">${product.store}</div>
    <div class="product-name">${product.name}</div>
    <div class="product-rating">${'⭐'.repeat(Math.floor(product.rating))} ${product.rating.toFixed(1)}</div>

    <div class="product-pricing">
      ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
      <span class="current-price">$${product.price.toFixed(2)}</span>
    </div>

    <div class="product-availability">
      <span class="status">✓ ${product.availability}</span>
    </div>

    <button class="buy-crypto-btn">💰 Buy with Crypto</button>
  `;

  // Add click handler to buy button
  card.querySelector('.buy-crypto-btn').addEventListener('click', () => {
    selectedProduct = product;
    openPaymentModal(product);
  });

  return card;
}

function openPaymentModal(product) {
  const modal = document.getElementById('payment-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="payment-summary">
      <h3>${product.name}</h3>
      <p style="color: #6b7280; margin-bottom: 12px;">From ${product.store}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 2px dashed #d1d5db;">
        <span>Total:</span>
        <span class="total-amount">$${product.price.toFixed(2)}</span>
      </div>
    </div>

    <h4 style="font-size: 15px; margin-bottom: 12px;">Select Cryptocurrency:</h4>
    <div class="crypto-options" id="crypto-options"></div>

    <button class="confirm-payment-btn" id="confirm-payment">✓ Confirm Payment</button>
  `;

  // Add crypto options
  const cryptoOptionsContainer = modalBody.querySelector('#crypto-options');
  Object.entries(cryptoPrices).forEach(([id, crypto]) => {
    const option = createCryptoOption(crypto, product.price);
    cryptoOptionsContainer.appendChild(option);
  });

  // Select first option by default
  cryptoOptionsContainer.querySelector('.crypto-option').classList.add('selected');

  // Add confirm payment handler
  modalBody.querySelector('#confirm-payment').addEventListener('click', handlePaymentConfirmation);

  modal.classList.remove('hidden');
  startPaymentTimer();
}

function createCryptoOption(crypto, usdAmount) {
  const cryptoAmount = (usdAmount / crypto.price).toFixed(8);

  const option = document.createElement('div');
  option.className = 'crypto-option';
  option.dataset.symbol = crypto.symbol;

  option.innerHTML = `
    <div class="crypto-info">
      <strong>${crypto.icon} ${crypto.symbol}</strong>
      <small>${crypto.name}</small>
    </div>
    <div class="crypto-amount">
      <div>${cryptoAmount} ${crypto.symbol}</div>
      <div style="font-size: 11px; color: #9ca3af;">$${formatPrice(crypto.price)}</div>
    </div>
  `;

  option.addEventListener('click', () => {
    document.querySelectorAll('.crypto-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
  });

  return option;
}

function startPaymentTimer() {
  let timeLeft = 900; // 15 minutes
  const timerElement = document.getElementById('timer');

  const interval = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
    }
  }, 1000);

  // Store interval for cleanup
  window.paymentTimer = interval;
}

function handlePaymentConfirmation() {
  const modalBody = document.getElementById('modal-body');

  // Show processing state
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div class="spinner" style="margin: 0 auto 20px;"></div>
      <h3 style="font-size: 18px; margin-bottom: 8px;">Processing Payment...</h3>
      <p style="color: #6b7280;">Waiting for blockchain confirmation</p>
    </div>
  `;

  // Simulate processing
  setTimeout(() => {
    showPaymentSuccess();
  }, 3000);
}

function showPaymentSuccess() {
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="payment-success">
      <div class="success-icon">✓</div>
      <h3>Payment Confirmed!</h3>
      <p style="color: #6b7280; margin-bottom: 24px;">Your order has been successfully placed</p>
      <div style="background: #f9fafb; padding: 20px; border-radius: 12px; text-align: left;">
        <p style="font-weight: 600; font-size: 13px; margin-bottom: 8px;">Amount Paid:</p>
        <p style="color: #667eea; font-size: 16px; font-weight: 700;">$${selectedProduct.price.toFixed(2)} USD</p>
      </div>
      <button class="back-btn" onclick="closeModal()">Back to Shopping</button>
    </div>
  `;
}

function closeModal() {
  const modal = document.getElementById('payment-modal');
  modal.classList.add('hidden');

  if (window.paymentTimer) {
    clearInterval(window.paymentTimer);
  }
}

// Expose closeModal to global scope
window.closeModal = closeModal;

console.log('Crypto Price Compare Extension Loaded ✓');
