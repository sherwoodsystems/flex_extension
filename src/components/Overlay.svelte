<script lang="ts">
    import TopBar from "./TopBar.svelte";
    import SettingsModal from "./SettingsModal.svelte";
  import { Toaster } from 'svelte-5-french-toast';


    let showSettings = $state(false);
</script>



<div class="app-container">
    <Toaster position="top-center" />
    <div class="top-bar">
        <TopBar onclick={() => showSettings = true} />
    </div>

    {#if showSettings}
        <SettingsModal onclose={() => showSettings = false} />
    {/if}
</div>

<style>
    .app-container {
        position: relative;
        z-index: 9999;
    }

    .top-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 36px;
        background-color: #2ecc71;
        color: white;
        padding: 0 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>
