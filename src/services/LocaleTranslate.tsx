import { locales } from '../config/locales'

const LocaleTranslate = (locale: string) => {
  return Object.values(locales)[Object.keys(locales).findIndex((l) => l === locale)]
}

export default LocaleTranslate
