export interface Quote {
    quoteId: string;
    keyInfo: any; // Replace with proper type
    data: any; // Replace with proper type
    quoteTotals: any; // Replace with proper type
    headerData: any; // Replace with proper type
    quoteChecks: Array<{
        name: string;
        detected: boolean;
    }>;
    dateChecks: Record<string, any>;
    logisticsCustomFields: any; // Replace with proper type
}

export interface LogisticsCustomField {
  id: string;
  caption: string;
  storedValue: string;
  dataType: string;
  referencedObject?: {
    id: string;
    name: string;
  };
} 