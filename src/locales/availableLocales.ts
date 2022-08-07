export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en-US',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  ko: {
    name: 'Korean',
    iso: 'ko-KR',
    flag: 'i-twemoji-flag-south-korea',
  },
}
