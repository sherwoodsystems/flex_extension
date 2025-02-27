<script lang="ts">
    import { onMount } from 'svelte';
    import KeyboardShortcuts from './KeyboardShortcuts.svelte';
    
    let { onclose } = $props();
    let apiKey = $state('');
    let userMode = $state('accountManager');
    let showKeyboardShortcuts = $state(false);

    const userModes = {
        ACCOUNT_MANAGER: 'accountManager',
        LOGISTICS: 'logistics',
        WAREHOUSE_MANAGER: 'warehouseManager',
        WAREHOUSE_USER: 'warehouseUser'
    };

    function saveSettings() {
        chrome.storage.local.set({ apiKey, userMode }, () => {
            onclose();
        });
    }

    onMount(() => {
        chrome.storage.local.get(['apiKey', 'userMode'], (result) => {
            if (result.apiKey !== undefined) apiKey = result.apiKey;
            if (result.userMode !== undefined) userMode = result.userMode;
        });
    });
</script>

<div 
    class="modal-backdrop"
    on:click={onclose}
    on:keydown={e => e.key === 'Escape' && onclose()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="settings-title"
    tabindex="0"
>
    <div class="modal-content" on:click|stopPropagation>
        <div class="settings-header">
            <h3 id="settings-title">Settings</h3>
            <button class="close-button" on:click={onclose} aria-label="Close Settings">✕</button>
        </div>
        
        <label for="apiKey">API Key</label>
        <input
            class="api-key-input"
            type="password"
            id="apiKey"
            bind:value={apiKey}
        />

        <label for="userMode">User Mode</label>
        <select 
            id="userMode" 
            class="user-mode-select" 
            bind:value={userMode}
        >
            <option value={userModes.ACCOUNT_MANAGER}>Account Manager</option>
            <option value={userModes.LOGISTICS}>Logistics</option>
            <option value={userModes.WAREHOUSE_MANAGER}>Warehouse Manager</option>
            <option value={userModes.WAREHOUSE_USER}>Warehouse User</option>
        </select>

        <div class="shortcuts-link">
            <button class="link-button" on:click={() => showKeyboardShortcuts = true}>
                ⌨️ Keyboard Shortcuts
            </button>
        </div>

        <button class="save-button" on:click={saveSettings}>Save</button>
    </div>
</div>

{#if showKeyboardShortcuts}
    <KeyboardShortcuts onclose={() => showKeyboardShortcuts = false} />
{/if}

<style>
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

    .settings-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 4px;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .api-key-input, .user-mode-select {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .save-button {
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: #2ecc71;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 1rem;
    }

    .save-button:hover {
        background-color: #27ae60;
    }

    .shortcuts-link {
        margin-top: 16px;
        text-align: center;
    }

    .link-button {
        background: none;
        border: none;
        color: #2ecc71;
        text-decoration: underline;
        cursor: pointer;
        padding: 4px 8px;
    }

    .link-button:hover {
        color: #27ae60;
    }
</style> 