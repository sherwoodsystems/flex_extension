<script lang="ts">
    import CopyLogisticsButton from './CopyLogisticsButton.svelte';
    let { onclick } = $props();
</script>

<div class="top-bar-content">
    <h1>Fix Flex</h1>
    <div class="actions">
        <CopyLogisticsButton />
        <button class="settings-button" on:click={onclick} aria-label="Open Settings">
            <svg class="gear-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </button>
    </div>
</div>

<style>
    .top-bar-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 8px;
    }

    h1 {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .settings-button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 25px;
        width: 25px;
    }

    .settings-button:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .gear-icon {
        width: 14px;
        height: 14px;
        color: currentColor;
    }
</style> 