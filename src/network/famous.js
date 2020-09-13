import {request} from './request.js'

export function getFamousUser() {
	return request({
		url: '/famous/famous-user?limit=10'
	})
}

export function getFamousStars() {
	return request({
		url: '/famous/top-user?page=1&limit=12'
	})
}

export function getFamousSingers(type) {
	return request({
		url: '/famous' + type,
		params: {
			page: 1,
			limit: 5
		}
	})
}

export function getFamousClassify() {
	return request({
		url: '/famous/type-list'
	})
}

export function getClassifyInfo(page) {
	return request({
		url: '/famous/user-list-by-type',
		params: {
			famous_type: page,
			limit: 44
		}
	})
}