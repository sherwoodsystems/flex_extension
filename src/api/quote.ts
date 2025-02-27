import { apiRequest } from './index';
import type { QuoteKeyInfo, QuoteTotals, QuoteHeaderData, LogisticsCustomField } from './types';

export async function fetchQuoteKeyInfo(quoteId: string) {
    return apiRequest<QuoteKeyInfo>(`/financial-document/${quoteId}/key-info`);
}

export async function getQuoteTotals(quoteId: string) {
    return apiRequest<QuoteTotals>(
        `/financial-document/${quoteId}/total-row-data/?codeList=priceDiscount&codeList=priceSubtotal&codeList=salesTax&codeList=totalPrice&codeList=totalAppliedPayments&codeList=balanceDue`
    );
}

export async function fetchQuoteHeaderData(quoteId: string) {
    return apiRequest<QuoteHeaderData>(
        `/element/${quoteId}/header-data/?codeList=plannedStartDate&codeList=loadInDate&codeList=showStartDate&codeList=loadOutDate&codeList=plannedEndDate`
    );
}

export async function updateQuoteDates(quoteId: string, dates: {
    loadInDate?: string;
    showStartDate?: string;
    loadOutDate?: string;
}) {
    const updates = Object.entries(dates).map(([fieldType, value]) => {
        if (!value) return null;
        
        return apiRequest(`/element/${quoteId}/header-update`, {
            method: 'POST',
            body: JSON.stringify({
                fieldType,
                payloadValue: value,
                customFieldId: null
            })
        });
    }).filter(Boolean);

    return Promise.all(updates);
}

export async function fetchLogisticsCustomFields(quoteId: string) {
    const groupId = '9f11d41b-51e2-480a-9407-8c0e7711fa69';
    const definitionId = '9bfb850c-b117-11df-b8d5-00e08175e43e';
    
    return apiRequest<LogisticsCustomField[]>(
        `/custom-field-value/${groupId}/element-values?elementId=${quoteId}&definitionId=${definitionId}`
    );
} 