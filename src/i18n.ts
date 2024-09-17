import deepmerge from 'deepmerge';
import type { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import ar from '@/locales/ar/index.json'
import en from '@/locales/en/index.json'
import fa from '@/locales/fa/index.json'
import { LocaleType } from './navigation';

const localeMessages: Partial<Record<LocaleType, any>> = {
    ar,
    en,
    fa
};

export default getRequestConfig(({ locale }) => {
  const primaryMessages: AbstractIntlMessages =
    localeMessages[locale as LocaleType] || localeMessages['en'];

  const fallbackMessages: AbstractIntlMessages = localeMessages['en'];

  const messages = deepmerge(fallbackMessages, primaryMessages);
  return { messages };
});