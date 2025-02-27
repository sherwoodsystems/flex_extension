<script lang="ts">
    import { onMount } from "svelte";
    let { onclose } = $props();
    
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

<div 
    class="modal-backdrop"
    onclick={onclose}
    onkeydown={e => e.key === 'Escape' && onclose()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="shortcuts-title"
    tabindex="0"
>
    <div class="modal-content">
        <div class="settings-header">
            <h3 id="shortcuts-title">Keyboard Shortcuts</h3>
            <button class="close-button" onclick={onclose} aria-label="Close Keyboard Shortcuts">✕</button>
        </div>

        <div class="shortcuts-list">
            {#each Object.entries(shortcuts) as [key, value]}
                <div class="shortcut-item">
                    <span class="shortcut-label">{shortcutLabels[key]}</span>
                    <span class="shortcut-value">{value}</span>
                </div>
            {/each}
        </div>

        <button class="close-button-bottom" onclick={onclose}>Close</button>
    </div>
</div>

<style>
    /* Reuse modal styles from SettingsModal */
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }

    .modal-content {
        background: white;
        padding: 24px;
        border-radius: 8px;
        width: 90%;
        max-width: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .shortcuts-list {
        margin: 20px 0;
    }

    .shortcut-item {
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shortcut-label {
        font-weight: 500;
    }

    .shortcut-value {
        background-color: #f5f5f5;
        padding: 4px 8px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
    }

    .close-button-bottom {
        width: 100%;
        padding: 8px;
        background-color: #f5f5f5;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 8px;
    }

    .close-button-bottom:hover {
        background-color: #e0e0e0;
    }

    /* Reuse other styles from SettingsModal */
</style> 