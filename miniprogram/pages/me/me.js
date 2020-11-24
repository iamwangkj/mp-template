Page({
  data: {
    nickName: wx.getStorageSync('nickName'),
    avatarUrl: wx.getStorageSync('avatarUrl')
  },

  onLoad (options) {}
})
