const BASE_URL = 'https://api.cheertrue.com'

const request = (opt) => {
  return new Promise((resolve, reject) => {
    const opts = Object.assign({
      url: '',
      data: null,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // timeout: 5000,
      method: 'GET',
      success (res) {
        resolve(res)
      },
      fail (err) {
        wx.showToast({
          title: err,
          icon: 'none',
          duration: 1500,
          mask: true
        })
        reject(err)
      }
    }, opt)
    wx.request(opts)
  })
}

export default request
