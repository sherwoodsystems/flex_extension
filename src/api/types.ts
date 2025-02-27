export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface QuoteKeyInfo {
    // Add specific fields from your API response
    id: string;
    status: string;
    // ... other fields
}

export interface QuoteTotals {
    // Add specific fields from your API response
    subtotal: number;
    total: number;
    // ... other fields
}

export interface QuoteHeaderData {
    plannedStartDate?: { data: string };
    loadInDate?: { data: string };
    showStartDate?: { data: string };
    loadOutDate?: { data: string };
    plannedEndDate?: { data: string };
} 