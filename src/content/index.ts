import { mount } from "svelte";
import Overlay from "../components/Overlay.svelte";
import { count } from "../storage";

// Content scripts
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/

// Some global styles on the page
import "./styles.css";

// Some JS on the page
count.subscribe(console.log);

// Some svelte component on the page
mount(Overlay, { target: document.body });

// Add this to your existing keyboard event listener
document.addEventListener('keydown', function(event) {
    // Check for Cmd+Shift+I (Mac) or Ctrl+Alt+I (Windows/Linux)
    const isMac = navigator.platform.toLowerCase().includes('mac');
    const modifierKey = isMac ? event.metaKey : event.ctrlKey;
    const secondModifier = isMac ? event.shiftKey : event.altKey;
    
    if (modifierKey && secondModifier && event.key.toLowerCase() === 'i') {
      // Prevent default browser behavior
      event.preventDefault();
      
      // Dispatch a custom event that our Svelte component can listen for
      document.dispatchEvent(new CustomEvent('copyLogisticsInfo'));
    }
  });
