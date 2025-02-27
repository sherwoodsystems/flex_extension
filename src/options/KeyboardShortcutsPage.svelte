<script lang="ts">
    const isMac = navigator.platform.toLowerCase().includes('mac');
    
    // Define fixed shortcuts
    const shortcuts = {
        copyLogistics: isMac ? 'Cmd+Shift+I' : 'Ctrl+Alt+I',
        openQuoteSearch: isMac ? 'Cmd+J' : 'Ctrl+J',
        priceMuteAll: 'Alt+M',
        newQuote: 'Alt+N',
        copyQuote: 'Alt+C'
    };

    const shortcutLabels = {
        copyLogistics: 'Copy Logistics Info',
        openQuoteSearch: 'Open Quote Search',
        priceMuteAll: 'Price Mute All',
        newQuote: 'New Quote',
        copyQuote: 'Copy Quote'
    };
</script>

<div class="container">
    <div class="header">
        <h1>Keyboard Shortcuts</h1>
    </div>
    
    <p class="instructions">Reference for keyboard shortcuts in the extension</p>
    
    <div class="shortcuts-list">
        {#each Object.entries(shortcuts) as [key, value]}
            <div class="shortcut-item">
                <span class="shortcut-label">{shortcutLabels[key]}</span>
                <span class="shortcut-value">{value}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        font-family: system-ui, -apple-system, sans-serif;
    }

    .header {
        margin-bottom: 24px;
    }

    .instructions {
        color: #666;
        margin-bottom: 24px;
    }

    h1 {
        margin: 0;
        font-size: 24px;
        color: #333;
    }

    .shortcuts-list {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        padding: 20px;
    }

    .shortcut-item {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shortcut-item:last-child {
        margin-bottom: 0;
    }

    .shortcut-label {
        font-weight: 500;
        color: #333;
    }

    .shortcut-value {
        background-color: #f5f5f5;
        padding: 8px 12px;
        border-radius: 6px;
        font-family: monospace;
        font-size: 14px;
    }
</style> 