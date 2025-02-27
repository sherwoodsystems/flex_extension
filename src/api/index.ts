import { get } from 'svelte/store';
import { apiKey } from '../stores/settings';

const BASE_URL = 'https://sherwood.flexrentalsolutions.com/f5/api';

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    const key = get(apiKey);
    
    if (!key) {
        throw new Error('API key not found');
    }

    const defaultOptions: RequestInit = {
        headers: {
            'X-Auth-Token': key,
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(
            `${BASE_URL}${endpoint}`,
            { ...defaultOptions, ...options }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('API request failed:', error);
        return { 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        };
    }
} 