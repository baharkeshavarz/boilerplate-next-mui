"use client";

import { LocaleType, languages } from "@/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useLocale } from "next-intl";
import React from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { FC, PropsWithChildren } from "react";

const rtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltr = createCache({
  key: "mui",
});

const caches = {
  rtl,
  ltr,
};

const RTLProvider: FC<PropsWithChildren> = ({ children }) => {
  const locale = useLocale();
  
  return (
    <CacheProvider
      value={caches[languages[locale as LocaleType].direction ?? "ltr"]}
    >
      {children}
    </CacheProvider>
  );
};

export default RTLProvider;
