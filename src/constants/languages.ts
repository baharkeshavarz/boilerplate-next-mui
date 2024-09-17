const defaultLanguage = "en"

type Language = {
  dropdownValue: string
  countryName: string
}

export const i18n = {
  locales: ["en", "ar","fa"]
} as const

const supportedLanguagesMap: Record<string, Language> = {
  ar: { dropdownValue: "عربي", countryName: "Arab" },
  en: { dropdownValue: "English", countryName: "England" },
  fa: { dropdownValue: "فارسی", countryName: "Farsi" }
}
const supportedLanguages = Object.keys(supportedLanguagesMap)

const humanReadableLanguage = (key = defaultLanguage) => {
  return supportedLanguagesMap[key].dropdownValue
}

const getCountryName = (key = defaultLanguage) =>
  supportedLanguagesMap[key]?.countryName

export type Locale = (typeof i18n)["locales"][number]

const ServerLanguage = {
  en: "en-UN",
  ar: "ar-SA",
  fa: "fa-IR"
}

export {
  getCountryName,
  humanReadableLanguage,
  supportedLanguages,
  supportedLanguagesMap,
  defaultLanguage,
  ServerLanguage
}
