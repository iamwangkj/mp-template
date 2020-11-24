Page({
  data: {},

  onLoad (options) {},

  getUserInfo (res) {
    console.log('getUserInfo返回的数据', res)
    const { nickName, avatarUrl } = res.detail.userInfo
    wx.setStorageSync('nickName', nickName)
    wx.setStorageSync('avatarUrl', avatarUrl)
    wx.reLaunch({ url: '/pages/index/index' })
  }
})
