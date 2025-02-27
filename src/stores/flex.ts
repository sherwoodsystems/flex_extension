import { persistentStore } from '../storage';
import type { FlexState, UserMode } from '../types';

export const flexState = persistentStore<FlexState>('flexState', 'home');
export const userMode = persistentStore<UserMode>('userMode', 'accountManager');
export const currentQuoteId = persistentStore<string | null>('currentQuoteId', null);
export const currentEventFolderId = persistentStore<string | null>('currentEventFolderId', null); 