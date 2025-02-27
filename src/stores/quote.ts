import { writable } from 'svelte/store';
import type { Quote } from '../types/quote';

export const currentQuote = writable<Quote | null>(null);
export const flexState = writable<'home' | 'quote' | 'event_folder'>('home');
export const userMode = writable<'accountManager' | 'logistics' | 'warehouseManager' | 'warehouseUser'>('accountManager'); 