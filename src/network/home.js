import {request} from './request.js'

export function getHomeIndex() {
  return request({
		url: '/other/index'
	})
}

export function getHomeFamous() {
  return request({
		url: '/famous/famous-user?limit=5'
	})
}

export function getHomeAlbum() {
  return request({
		url: '/album/list?limit=20&condation=1%3A0%2C2%3A0'
	})
}

export function getHomeSound(page) {
	return request({
		url: '/recommend/sound-day',
		params: {
			page
		}
	})
}
