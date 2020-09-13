import {request} from './request.js'

export function getRankDeatil(type ,periods, limit) {
	return request({
		url: '/rank' + type,
		params: {
			periods,
			limit
		}
	})
}