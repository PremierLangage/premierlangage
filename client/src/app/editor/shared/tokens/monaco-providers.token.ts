import {InjectionToken} from '@angular/core';
import { Language } from '../models/language.model';


export const LANGUAGE_PROVIDERS = new InjectionToken<Language[]>('Language Provider');
export const LANGUAGE_REGISTERS = new InjectionToken('Language Register');
export const COMPLETION_PROVIDERS = new InjectionToken('Completion Provider');
