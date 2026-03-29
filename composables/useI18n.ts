import languageData from '~/i18n/language.json'

export type Language = 'zh' | 'en'

const currentLang = ref<Language>('zh')

export function useI18n() {
  const t = (key: keyof typeof languageData) => {
    const index = currentLang.value === 'zh' ? 0 : 1
    return languageData[key]?.[index] || key
  }

  const setLang = (lang: Language) => {
    currentLang.value = lang
  }

  const toggleLang = () => {
    currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
  }

  return {
    t,
    currentLang,
    setLang,
    toggleLang
  }
}
