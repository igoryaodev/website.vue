const HOME_ZH = require('./home/zh.json')
const HOME_EN = require('./home/en.json')
const EXHIBITION_ZH = require('./exhibiton/zh.json')
const EXHIBITION_EN = require('./exhibiton/en.json')
const SUPPORT_ZH = require('./support/zh.json')
const SUPPORT_EN = require('./support/en.json')
const ABOUT_ZH = require('./about/zh.json')
const ABOUT_EN = require('./about/en.json')
const PROGRAM_ZH = require('./program/zh.json')
const PROGRAM_EN = require('./program/en.json')
const SHOP_ZH = require('./shop/zh.json')
const SHOP_EN = require('./shop/en.json')
const CONTACT_ZH = require('./contact/zh.json')
const CONTACT_EN = require('./contact/en.json')

module.exports = {
  'zh-CN': {
    home: HOME_ZH,
    activity: EXHIBITION_ZH,
    support: SUPPORT_ZH,
    about: ABOUT_ZH,
    program: PROGRAM_ZH,
    shop: SHOP_ZH,
    contact: CONTACT_ZH,
  },
  'en-US': {
    home: HOME_EN,
    activity: EXHIBITION_EN,
    support: SUPPORT_EN,
    about: ABOUT_EN,
    program: PROGRAM_EN,
    shop: SHOP_EN,
    contact: CONTACT_EN,
  },
}
