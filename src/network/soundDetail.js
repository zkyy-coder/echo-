import { request } from './request.js'

export function getSoundInfo(id) {
	return request({
		url: '/sound/info',
		params: {
			id,
			comment: 1
		}
	})
}