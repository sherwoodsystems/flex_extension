<script lang="ts">
  import { currentQuote } from '../stores/quote';
  import { userMode } from '../stores/flex';
  import { formatLogisticsInfo } from '../utils/logisticsFormatter';
  import toast from 'svelte-5-french-toast';
  import { get } from 'svelte/store';
  import { onMount, onDestroy } from 'svelte';

  let showButton = $derived(get(userMode) === 'logistics');

  function copyLogisticsInfo() {
    const quote = get(currentQuote);
    
    if (!quote || !quote.logisticsCustomFields) {
      toast.error('No logistics information available');
      return;
    }
    
    const formattedText = formatLogisticsInfo(quote.logisticsCustomFields);
    
    navigator.clipboard.writeText(formattedText)
      .then(() => {
        toast.success('Logistics info copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
        toast.error('Failed to copy logistics info');
      });
  }

  function handleKeyboardShortcut() {
    copyLogisticsInfo();
  }

  onMount(() => {
    document.addEventListener('copyLogisticsInfo', handleKeyboardShortcut);
  });

  onDestroy(() => {
    document.removeEventListener('copyLogisticsInfo', handleKeyboardShortcut);
  });
</script>

<!-- {#if showButton} -->
  <button 
    onclick={copyLogisticsInfo}
    class="copy-logistics-btn"
    title="Copy Logistics Info (Cmd+Shift+I / Ctrl+Alt+I)"
  >
    Copy Logistics Info
  </button>
<!-- {/if} -->

<style>
  .copy-logistics-btn {
    padding: 4px 8px;
    background-color: #4a4a4a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    display: flex;
    align-items: center;
  }

  .copy-logistics-btn:hover {
    background-color: #333;
  }
</style> 