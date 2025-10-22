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
please contact aravinthanwork@gmail.com



**Happy Price Comparing! 💰🚀**
