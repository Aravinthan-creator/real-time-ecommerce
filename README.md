# Crypto Price Comparison Chrome Extension

## Quick Setup Guide

### Installation Steps

1. **Download all files** to a folder named `crypto-price-extension`

2. **Open Chrome** and navigate to:
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `crypto-price-extension` folder
   - Click "Select Folder"

5. **Pin the Extension**
   - Click the puzzle piece icon in Chrome toolbar
   - Find "Crypto Price Comparison"
   - Click the pin icon

### Usage

1. Click the extension icon in your Chrome toolbar
2. Search for products (e.g., "iPhone 15", "AirPods")
3. View price comparisons across stores
4. Click "Buy with Crypto" to see payment options
5. Select cryptocurrency and confirm payment (demo mode)

### Features

✅ Multi-store price comparison (Amazon, Flipkart, BestBuy)
✅ Real-time cryptocurrency prices
✅ Animated crypto ticker
✅ Best deal highlighting
✅ Crypto payment simulation
✅ Savings calculator

### Sample Searches

Try these quick searches:
- iPhone 15
- AirPods Pro
- MacBook Pro
- Sony Headphones

### Demo Mode

This extension runs in **demo mode** with sample data. For production use:

1. Set up the Python backend (see backend setup in main docs)
2. Update API_BASE in popup.js to your backend URL
3. The extension will fetch real product data

### Files Included

- `manifest.json` - Extension configuration
- `popup.html` - Main UI
- `popup.js` - JavaScript logic
- `styles.css` - Styling
- `icon.png` - Extension icon
- `README.md` - This file

### Troubleshooting

**Extension won't load?**
- Make sure all files are in the same folder
- Check that Developer Mode is enabled
- Reload the extension page

**Search not working?**
- Extension uses demo data by default
- Try the quick search buttons
- Check browser console for errors (F12)

**Want real data?**
- Set up the Python backend server
- Update API_BASE in popup.js
- Backend will scrape real prices

### Support

For issues or questions:
- Check Chrome DevTools Console (F12)
- Verify all files are present
- Make sure Chrome is up to date (v88+)

### Version

Version: 1.0.0
Last Updated: October 2025

---

**Enjoy comparing prices! 💰🚀**
