/**
 * Created by Administrator on 2/24.
 */
import queryString from 'query-string'
import _ from 'lodash'
import apiData from './apiData'
//import fetchJsonp from 'fetch-jsonp'

//const host = 'https://api.douban.com'
export const get = async(url, option) => {
	try {
		//const res = await fetchJsonp(host + url, option)
    const res = await fetch( url, option)
		const json = await res.json()
		return json
	} catch (err) {
		return {}
	}
}

const getFromFile = (params) => data => new Promise((resolve) => {
	setTimeout(x => resolve(apiData[params][data.start === 0 ? '0' : '1']), 2000);
})


const _handleApi = (name) => (data, routeId, option) => (window.IS_PRO
	// || 1
	&& 0
) ? getFromFile(name)(data) : get('/v2/movie/' + name + (routeId ? '/' + routeId : '') + ((data) ? '?' + queryString.stringify(data) : ''), option)

const apiList = ['top250', 'coming_soon', 'in_theaters', 'search', 'subject']
const api = _.reduce(apiList, (res, e, i) => {
	res[e] = _handleApi(e)
	return res
}, {});

export {api}
