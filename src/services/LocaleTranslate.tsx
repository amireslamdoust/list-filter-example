const LocaleTranslate = (locale: string) => {
  switch (locale) {
    case 'de':
      return 'German'
    case 'en':
      return 'English'
    case 'fr':
      return 'France'
    case 'it':
      return 'Italy'
    default:
      return 'German'
  }
}

export default LocaleTranslate
