import { useI18n } from 'vue-i18n'
import { availableLocales } from '../locales/availableLocales'

export function languageController() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const readBrowserLanguage = (): string => {
    try {
      const lang = window ? window.navigator.language : 'ko-KR'
      return availableLocales[lang] ? lang : 'ko-KR'
    }
    catch (error) {
      return 'ko-KR'
    }
  }
  const readUserLocale = (): string =>
    localeUserSetting.value || readBrowserLanguage()

  const systemi18n = useState<string>('locale.i18n', () => readUserLocale())

  watch(systemi18n, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  const init = () => {
    locale.value = systemi18n.value
  }

  onMounted(() => init())

  return {
    systemi18n,
    init,
  }
}
