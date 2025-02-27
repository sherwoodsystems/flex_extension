import { persistentStore } from '../storage';

export const apiKey = persistentStore<string>('apiKey', ''); 