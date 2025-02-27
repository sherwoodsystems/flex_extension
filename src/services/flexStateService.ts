import { flexState, currentQuoteId, currentEventFolderId } from '../stores/flex';
import { QuoteManager } from '../lib/QuoteManager';

export class FlexStateService {
    private static instance: FlexStateService;
    private quoteManager: QuoteManager;

    private constructor() {
        this.quoteManager = QuoteManager.getInstance();
    }

    static getInstance(): FlexStateService {
        if (!FlexStateService.instance) {
            FlexStateService.instance = new FlexStateService();
        }
        return FlexStateService.instance;
    }

    handleUrlChange(url: string): void {
        if (url.includes('#home')) {
            this.transitionToHome();
        } else if (url.includes('#fin-doc/')) {
            const quoteId = this.extractIdFromUrl(url, '#fin-doc/');
            if (quoteId) this.transitionToQuote(quoteId);
        } else if (url.includes('#element/')) {
            const eventFolderId = this.extractIdFromUrl(url, '#element/');
            if (eventFolderId) this.transitionToEventFolder(eventFolderId);
        } else {
            this.transitionToHome();
        }
    }

    private transitionToHome(): void {
        flexState.set('home');
        currentQuoteId.set(null);
        currentEventFolderId.set(null);
    }

    private async transitionToQuote(quoteId: string): Promise<void> {
        flexState.set('quote');
        currentQuoteId.set(quoteId);
        currentEventFolderId.set(null);
        await this.quoteManager.initQuote(quoteId);
    }

    private transitionToEventFolder(eventFolderId: string): void {
        flexState.set('event_folder');
        currentQuoteId.set(null);
        currentEventFolderId.set(eventFolderId);
        // TODO: Add event folder initialization when needed
    }

    private extractIdFromUrl(url: string, prefix: string): string | null {
        const hashParts = url.split(prefix)[1];
        return hashParts ? hashParts.split('/')[0] : null;
    }
} 