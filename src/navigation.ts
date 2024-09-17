import { Direction } from '@mui/material';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ar','fa'] as const;

export const languages: Record<
  LocaleType,
  {
    label: string;
    direction: Direction;
  }
> = {
  en: {
    label: 'English',
    direction: 'ltr',
  },
  ar: {
    label: 'Arabic',
    direction: 'rtl',
  },
  fa: {
    label: 'Farsi',
    direction: 'rtl',
  },
};

export type LocaleType = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });