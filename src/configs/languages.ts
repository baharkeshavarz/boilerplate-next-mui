
export const languages = [
    { name: "English", dir: "ltr", symbol: 'en', flag: "gb" },
    { name: "Arabic", dir: "rtl", symbol: 'ar', flag: "sa" },
    { name: "Farsi", dir: "rtl", symbol: 'fa', flag: "fa" },
  ] as const;
  
  export type LanguagesType = (typeof languages)[number]["symbol"];
  