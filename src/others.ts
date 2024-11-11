import cn from './locales/zh-CN.json'
import en from './locales/en.json'

export const t = (key: string) => {
  const locale = localStorage.getItem('locale')
  return locale === 'zh-CN' ? cn[key] : en[key]
}
