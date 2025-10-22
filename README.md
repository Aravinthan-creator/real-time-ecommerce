# Crypto Price Comparison Chrome Extension

## Complete Setup Guide & Documentation

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Prerequisites](#prerequisites)
5. [Installation Guide](#installation-guide)
6. [Backend Setup](#backend-setup)
7. [Frontend Setup](#frontend-setup)
8. [Loading Extension in Chrome](#loading-extension-in-chrome)
9. [Usage Guide](#usage-guide)
10. [API Documentation](#api-documentation)
11. [Troubleshooting](#troubleshooting)
12. [Security Considerations](#security-considerations)
13. [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

**Crypto Price Comparison Extension** is a Chrome browser extension that allows users to:
- Search for products across multiple e-commerce platforms (Amazon, Flipkart, etc.)
- Compare prices in real-time
- View live cryptocurrency prices with animated updates
- Purchase products using cryptocurrency payments
- Track best deals and savings

### Tech Stack

**Frontend (Chrome Extension)**
- React 18.2.0
- Webpack 5
- Babel
- Chrome Extension Manifest V3
- CSS3 with animations

**Backend (API Server)**
- Python 3.9+
- FastAPI
- BeautifulSoup4
- Selenium with Undetected ChromeDriver
- WebSockets
- Uvicorn ASGI server

**APIs & Services**
- CoinGecko API (Cryptocurrency prices)
- Binance API (Optional)
- Amazon & Flipkart web scraping

---

## ✨ Features

### Core Features

1. **Multi-Platform Price Comparison**
   - Scrapes product data from Amazon, Flipkart
   - Real-time price updates
   - Highlights best deals automatically
   - Shows savings calculations

2. **Real-Time Cryptocurrency Prices**
   - Live crypto ticker with flashing animations
   - Supports Bitcoin, Ethereum, Tether, Litecoin
   - WebSocket-based real-time updates
   - 24-hour price change indicators

3. **Crypto Payment Integration**
   - Convert USD prices to cryptocurrency amounts
   - Generate payment QR codes
   - Wallet address generation
   - Transaction tracking (simulated)

4. **User Interface**
   - Modern, responsive design
   - Product cards with ratings and images
   - Animated crypto ticker
   - Modal-based payment flow
   - Loading states and error handling

5. **Chrome Extension Integration**
   - Floating button on e-commerce sites
   - Auto-detect products on pages
   - Quick access popup
   - Background service worker
   - Chrome storage API

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Chrome Extension                      │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Popup UI  │  │   Content    │  │   Background  │  │
│  │   (React)   │  │   Script     │  │Service Worker │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
└──────────────────────────┬──────────────────────────────┘
                           │
                           │ HTTP/WebSocket
                           │
┌──────────────────────────┴──────────────────────────────┐
│                    Python Backend                        │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   FastAPI   │  │   Scrapers   │  │Crypto Service │  │
│  │   Server    │  │  (Selenium)  │  │  (CoinGecko)  │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
└──────────────────────────┬──────────────────────────────┘
                           │
                           │ External APIs
                           │
┌──────────────────────────┴──────────────────────────────┐
│          External Services & E-commerce Sites            │
│     Amazon │ Flipkart │ CoinGecko API │ Binance API     │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### System Requirements
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: 2GB free space

### Software Dependencies

1. **Node.js & npm**
   ```bash
   # Check if installed
   node --version  # Should be v16.0.0 or higher
   npm --version   # Should be v8.0.0 or higher
   
   # Install from: https://nodejs.org/
   ```

2. **Python**
   ```bash
   # Check if installed
   python --version  # Should be 3.9 or higher
   pip --version
   
   # Install from: https://www.python.org/downloads/
   ```

3. **Google Chrome**
   ```bash
   # Should be version 88 or higher
   # Install from: https://www.google.com/chrome/
   ```

4. **Git** (optional but recommended)
   ```bash
   git --version
   # Install from: https://git-scm.com/
   ```

5. **Chrome/Chromium WebDriver** (for Selenium)
   - Automatically handled by undetected-chromedriver
   - Or download manually from: https://chromedriver.chromium.org/

---

## 🚀 Installation Guide

### Step 1: Download Project Files

Download and extract the complete project or clone if available:

```bash
# Option 1: Download ZIP and extract
# crypto-price-extension.zip

# Option 2: Clone repository (if available)
git clone https://github.com/yourusername/crypto-price-extension.git
cd crypto-price-extension
```

### Step 2: Project Structure

Ensure your project has this structure:

```
crypto-price-extension/
├── extension/          # Chrome extension (React)
│   ├── public/
│   │   ├── manifest.json
│   │   ├── popup.html
│   │   └── icons/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── popup.jsx
│   │   ├── background.js
│   │   └── content.js
│   ├── package.json
│   ├── webpack.config.js
│   └── .babelrc
├── backend/           # Python API server
│   ├── scraper/
│   ├── crypto/
│   ├── app.py
│   ├── config.py
│   └── requirements.txt
├── README.md
└── .gitignore
```

---

## 🐍 Backend Setup

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Create Virtual Environment

**On Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

You should see `(venv)` in your terminal prompt.

### Step 3: Install Python Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

This will install:
- FastAPI (web framework)
- Uvicorn (ASGI server)
- BeautifulSoup4 (HTML parsing)
- Selenium (browser automation)
- Requests (HTTP library)
- undetected-chromedriver (anti-bot bypass)
- WebSockets (real-time communication)
- And more...

### Step 4: Create Environment File

Create a `.env` file in the `backend/` directory:

```bash
# backend/.env

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True

# CoinGecko API (Free tier - no key needed)
COINGECKO_API_KEY=

# Optional: Binance API
BINANCE_API_KEY=
BINANCE_SECRET_KEY=

# Optional: Proxy Configuration
USE_PROXY=False
PROXY_URL=

# Chrome Driver (auto-detected if not set)
CHROME_DRIVER_PATH=

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379
```

### Step 5: Test Backend Installation

```bash
# Run the server
python app.py

# Or using uvicorn
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

You should see:
```
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### Step 6: Test API Endpoints

Open a new terminal and test:

```bash
# Health check
curl http://localhost:8000/health

# Get crypto prices
curl http://localhost:8000/api/crypto/prices

# Search products (example)
curl -X POST http://localhost:8000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "iPhone 15", "max_results": 5}'
```

---

## ⚛️ Frontend Setup

### Step 1: Navigate to Extension Directory

```bash
cd extension
```

### Step 2: Install Node Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- Webpack and loaders
- Babel and presets
- Other build tools

### Step 3: Create Icon Files

Create icon files in `public/icons/`:

**Option 1: Use placeholder images**
- Download PNG icons (16x16, 48x48, 128x128)
- Save as: `icon16.png`, `icon48.png`, `icon128.png`

**Option 2: Create simple colored squares** (for testing)
```bash
# Use any image editor or online tool
# Create 16x16, 48x48, and 128x128 pixel images
```

### Step 4: Build the Extension

```bash
# Production build
npm run build

# Development build (with watch mode)
npm run dev
```

This creates a `dist/` folder with:
- popup.html
- popup.js
- background.js
- content.js
- manifest.json
- icons/

### Step 5: Verify Build Output

```bash
# Check dist folder exists
ls dist/

# Should contain:
# background.js
# content.js
# popup.js
# popup.html
# manifest.json
# icons/
```

---

## 🎨 Loading Extension in Chrome

### Step 1: Open Chrome Extensions Page

1. Open Google Chrome
2. Navigate to: `chrome://extensions/`
3. Or: Menu → More Tools → Extensions

### Step 2: Enable Developer Mode

1. Toggle **"Developer mode"** ON (top-right corner)
2. New buttons will appear: "Load unpacked", "Pack extension", etc.

### Step 3: Load the Extension

1. Click **"Load unpacked"**
2. Navigate to your project folder
3. Select the `extension/dist/` folder
4. Click **"Select Folder"**

### Step 4: Verify Installation

You should see your extension listed with:
- Extension name: "Crypto Price Comparison Extension"
- Version: 1.0.0
- Enabled toggle: ON
- Extension icon in the toolbar

### Step 5: Pin Extension to Toolbar

1. Click the puzzle piece icon (Extensions) in Chrome toolbar
2. Find "Crypto Price Comparison Extension"
3. Click the pin icon to keep it visible

---

## 📖 Usage Guide

### Basic Workflow

#### 1. Start the Backend Server

```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python app.py
```

Keep this terminal running.

#### 2. Open the Extension

- Click the extension icon in Chrome toolbar
- Or use keyboard shortcut (if configured)
- Extension popup will open (450px × 600px)

#### 3. Search for Products

1. Enter product name in search bar
   - Example: "iPhone 15", "Sony Headphones"
2. Click **Search** button
3. Wait 2-5 seconds for results

#### 4. View Price Comparison

- Results show products from multiple stores
- **Best Deal** is highlighted with a badge
- See:
  - Product name and image
  - Store name (Amazon, Flipkart)
  - Current price and original price
  - Discount percentage
  - Ratings
  - Stock availability

#### 5. View Crypto Prices

- Top ticker bar shows real-time cryptocurrency prices
- Prices flash/animate when updated
- Shows 24h change (up/down arrows)
- Supports: BTC, ETH, USDT, LTC

#### 6. Buy with Cryptocurrency

1. Click **"Buy with Crypto"** on any product
2. Modal opens with payment options
3. Select cryptocurrency (BTC, ETH, USDT, LTC)
4. See converted amount in real-time
5. View QR code and wallet address
6. Click **"Copy Address"** to copy wallet
7. Send payment from your wallet
8. Click **"I've Sent the Payment"**
9. View transaction confirmation

### Advanced Features

#### Auto-Detect Products

1. Visit Amazon or Flipkart product page
2. Extension auto-detects product
3. Floating button appears (bottom-right)
4. Click to compare prices

#### WebSocket Real-Time Updates

- Crypto prices update every 5 seconds
- No need to refresh
- Visual flash animation on price change

#### Search History

- Recent searches are saved
- Access via Chrome storage
- Quick repeat searches

---

## 📡 API Documentation

### Base URL

```
http://localhost:8000
```

### Endpoints

#### 1. Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "healthy"
}
```

#### 2. Root Information

```http
GET /
```

**Response:**
```json
{
  "message": "Crypto Price Comparison API",
  "version": "1.0.0",
  "endpoints": {
    "search": "/api/search",
    "crypto_prices": "/api/crypto/prices",
    "convert": "/api/crypto/convert",
    "websocket": "/ws/crypto"
  }
}
```

#### 3. Search Products

```http
POST /api/search
```

**Request Body:**
```json
{
  "query": "iPhone 15",
  "max_results": 10
}
```

**Response:**
```json
[
  {
    "name": "iPhone 15 Pro Max 256GB",
    "price": 1199.99,
    "original_price": 1299.99,
    "store": "Amazon",
    "rating": 4.6,
    "image_url": "https://...",
    "product_url": "https://...",
    "availability": "In Stock",
    "discount": 7.7
  }
]
```

#### 4. Get Crypto Prices

```http
GET /api/crypto/prices
```

**Response:**
```json
{
  "bitcoin": {
    "price": 43250.00,
    "change_24h": 2.4,
    "volume_24h": 28500000000,
    "market_cap": 846000000000,
    "symbol": "BTC",
    "name": "Bitcoin"
  },
  "ethereum": {
    "price": 2280.50,
    "change_24h": -1.2,
    ...
  }
}
```

#### 5. Convert USD to Crypto

```http
POST /api/crypto/convert
```

**Request Body:**
```json
{
  "usd_amount": 1000,
  "crypto_symbol": "BTC"
}
```

**Response:**
```json
{
  "usd_amount": 1000,
  "crypto_amount": 0.02312139,
  "crypto_symbol": "BTC",
  "current_price": 43250.00,
  "timestamp": "2025-10-22T17:00:00"
}
```

#### 6. WebSocket - Real-Time Prices

```
ws://localhost:8000/ws/crypto
```

**Connection:**
```javascript
const ws = new WebSocket('ws://localhost:8000/ws/crypto');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Crypto prices:', data);
};
```

**Message Format:**
```json
{
  "bitcoin": { "price": 43250.00, "change_24h": 2.4, ... },
  "ethereum": { "price": 2280.50, "change_24h": -1.2, ... }
}
```

---

## 🔧 Troubleshooting

### Common Issues

#### Issue 1: Backend won't start

**Error:** `ModuleNotFoundError: No module named 'fastapi'`

**Solution:**
```bash
# Ensure virtual environment is activated
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# Reinstall dependencies
pip install -r requirements.txt
```

#### Issue 2: Extension won't load

**Error:** "Manifest file is missing or unreadable"

**Solution:**
- Ensure you're selecting the `dist/` folder, not `extension/` folder
- Run `npm run build` again
- Check `dist/manifest.json` exists and is valid JSON

#### Issue 3: CORS errors in console

**Error:** "Access blocked by CORS policy"

**Solution:**
- Ensure backend is running
- Check API_HOST in `.env` is set correctly
- Backend CORS is configured to allow all origins (`allow_origins=["*"]`)

#### Issue 4: WebSocket connection failed

**Error:** "WebSocket connection to 'ws://localhost:8000/ws/crypto' failed"

**Solution:**
- Ensure backend server is running
- Check firewall isn't blocking port 8000
- Try using `127.0.0.1` instead of `localhost`

#### Issue 5: Scraping returns no results

**Possible Causes:**
- Anti-bot detection blocking requests
- Website structure changed
- Network issues

**Solution:**
```bash
# Test with verbose logging
python app.py --log-level debug

# Check scraper individually
python -c "from scraper.amazon_scraper import AmazonScraper; print(AmazonScraper().search('test'))"
```

#### Issue 6: Chrome extension not updating

**Solution:**
1. Go to `chrome://extensions/`
2. Click reload icon on your extension
3. Or remove and re-load the extension
4. Clear browser cache if needed

### Debug Mode

Enable debug mode for more information:

**Backend:**
```python
# In config.py
DEBUG = True
```

**Extension:**
```javascript
// In popup.jsx
console.log('Debug info:', data);
```

**Chrome DevTools:**
- Right-click extension icon
- Select "Inspect Popup"
- Check Console tab for errors

---

## 🔒 Security Considerations

### Important Security Notes

1. **API Keys**
   - Never commit `.env` file to git
   - Use environment variables for sensitive data
   - CoinGecko free tier doesn't require API key

2. **Web Scraping**
   - Respect robots.txt
   - Implement rate limiting
   - Use reasonable delays between requests
   - Consider using official APIs when available

3. **Cryptocurrency Payments**
   - This demo uses simulated payments only
   - For production, integrate with real payment gateways
   - Use secure wallet address generation
   - Implement proper transaction verification

4. **Data Privacy**
   - No user data is collected in this version
   - Search history stored locally only
   - No analytics or tracking

5. **HTTPS**
   - Use HTTPS in production
   - Secure WebSocket connections (wss://)
   - Validate SSL certificates

### Production Recommendations

```bash
# Use environment variables
export API_KEY=your_key_here

# Enable HTTPS
uvicorn app:app --ssl-keyfile=./key.pem --ssl-certfile=./cert.pem

# Use authentication
# Add JWT tokens or API keys for protected endpoints

# Rate limiting
pip install slowapi
# Implement rate limits per IP/user
```

---

## 🚧 Future Enhancements

### Planned Features

1. **More E-commerce Sites**
   - eBay integration
   - Walmart
   - BestBuy
   - Local stores

2. **Enhanced Crypto Support**
   - More cryptocurrencies
   - Real payment gateway integration
   - Transaction history
   - Multiple wallets support

3. **Advanced Features**
   - Price alerts and notifications
   - Price history charts
   - Wishlist functionality
   - Product comparison table
   - Browser notifications

4. **Improvements**
   - Caching with Redis
   - Database for user preferences
   - Multi-language support
   - Dark mode
   - Customizable themes

5. **Performance**
   - Parallel scraping
   - Background task queue (Celery)
   - CDN for static assets
   - Optimize bundle size

### Contributing

Contributions are welcome! Areas for improvement:
- Additional scrapers
- UI/UX enhancements
- Performance optimization
- Bug fixes
- Documentation

---

## 📄 License

This project is under MIT license

---

## 🙏 Acknowledgments

- **CoinGecko API** - Cryptocurrency data
- **FastAPI** - Modern Python web framework
- **React** - UI library
- **Selenium** - Browser automation
- **Chrome Extensions** - Platform

---

## 📞 Support

For issues or questions:
1. Check troubleshooting section above
2. Review console logs for errors
3. Ensure all dependencies are installed
4. Verify backend server is running

---

## 🎉 Quick Start Summary

```bash
# Terminal 1: Start Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

# Terminal 2: Build Extension
cd extension
npm install
npm run build

# Chrome: Load extension from extension/dist/ folder
# Done! Start searching for products!
```

---

**Happy Price Comparing! 💰🚀**
