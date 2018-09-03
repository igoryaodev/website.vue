import dateFns from 'date-fns'

const zhCNLocale = require('date-fns/locale/zh_cn')
/**
 * 日期格式化
 */
exports.date = (value, format) => dateFns.format(value, format)

/**
 * 日期本地格式化
 */
exports.dateLocale = (value, format) => dateFns.format(value, format, { locale: zhCNLocale })

/**
 * qiniu 图片
 */
const host = 'http://7xkcpc.com2.z0.glb.qiniucdn.com/'
exports.qiniu = (value, style) => {
  let url
  if (!value) {
    return false
  }
  if (value.indexOf('http://') < 0) {
    url = host + value
  }
  if (value.indexOf('#') >= 0) {
    url = value.substr(0, value.indexOf('#'))
  }
  if (style && style.length > 0) {
    url = `${value}?${style}`
  }
  return url
}

