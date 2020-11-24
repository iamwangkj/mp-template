import request from './request'

export function search (keyword = '') {
  return request({
    url: `https://api.github.com/search/repositories?q=${keyword}`
  })
}
