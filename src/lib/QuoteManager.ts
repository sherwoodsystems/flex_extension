import { currentQuote } from '../stores/quote';
import type { Quote } from '../types/quote';

export class QuoteManager {
    private static instance: QuoteManager;
    
    private constructor() {}
    
    static getInstance(): QuoteManager {
        if (!QuoteManager.instance) {
            QuoteManager.instance = new QuoteManager();
        }
        return QuoteManager.instance;
    }

    async initQuote(quoteId: string) {
        try {
            // We'll implement these API functions later
            const [keyInfo, data, quoteTotals, headerData, logisticsCustomFields] = await Promise.all([
                this.fetchQuoteKeyInfo(quoteId),
                this.fetchAndProcessQuoteData(quoteId),
                this.getQuoteTotals(quoteId),
                this.fetchQuoteHeaderData(quoteId),
                this.fetchLogisticsCustomFields(quoteId)
            ]);

            const quote: Quote = {
                quoteId,
                keyInfo,
                data,
                quoteTotals,
                headerData,
                quoteChecks: this.processQuoteChecks(data),
                dateChecks: this.processDateChecks(keyInfo, headerData),
                logisticsCustomFields
            };

            // Update the Svelte store
            currentQuote.set(quote);
            
            // Also save to Chrome storage for persistence
            chrome.storage.local.set({ currentQuote: quote });

            return quote;
        } catch (error) {
            console.error(`Failed to initialize quote ${quoteId}:`, error);
            throw error;
        }
    }

    // Add other methods as needed
} 