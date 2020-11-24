import api from '../../api/index'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad () {
    api.github.search('thinkjs').then((res) => {
      console.log('github查询结果=', res)
    })
  }

})
