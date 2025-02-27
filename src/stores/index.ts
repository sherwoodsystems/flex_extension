export type FlexState = 'home' | 'quote' | 'event_folder' | 'pull_sheet' | 'manifest' | 'invoice';

export type UserMode = 'accountManager' | 'logistics' | 'warehouseManager' | 'warehouseUser';

export interface Quote {
    quoteId: string;
    keyInfo: QuoteKeyInfo;
    data: QuoteData;
    quoteTotals: QuoteTotals;
    headerData: QuoteHeaderData;
    quoteChecks: QuoteCheck[];
    dateChecks: Record<string, any>;
    logisticsCustomFields: LogisticsCustomField[];
}

// Add other interfaces as needed - we can fill these in when you share the API types
interface QuoteKeyInfo {}
interface QuoteData {}
interface QuoteTotals {}
interface QuoteHeaderData {}
interface QuoteCheck {}
interface LogisticsCustomField {}