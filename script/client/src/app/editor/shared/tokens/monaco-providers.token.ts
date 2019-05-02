import { InjectionToken } from '@angular/core';
import { ILanguageDefinition } from '../models/language-definition.model';

export const LANGUAGE_PROVIDERS = new InjectionToken<ILanguageDefinition[]>('Language Provider');
