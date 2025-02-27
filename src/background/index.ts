import { QuoteManager } from '../lib/QuoteManager';
// import { setupWebRequestListeners } from './webRequestListeners';
// import { setupMessageHandlers } from './messageHandlers';
// import { setupTabListeners } from './tabListeners';

// Initialize the background script
function init() {
    const quoteManager = QuoteManager.getInstance();
    
    // Setup all listeners
//     setupWebRequestListeners(quoteManager);
//     setupMessageHandlers(quoteManager);
//     setupTabListeners(quoteManager);
// 
}

// Initialize when extension is installed or updated
chrome.runtime.onInstalled.addListener(init);