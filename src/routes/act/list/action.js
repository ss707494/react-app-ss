/**
 * Created by Administrator on 2/16.
 */
import {createActions, handleActions} from 'redux-actions'
import Immutable from 'immutable';
import {api} from '../api'

export const name = 'movieList'

const initState = Immutable.fromJS({
	// showModel: 'list',
	showModel: 'grid',
	title: '电影列表',
	list: [],
	start: 0,
	show: false,
	showSearch: false,
})

export const GET_LIST = 'GET_LIST';
export const GET_COMING_SOON_LIST = 'GET_COMING_SOON_LIST';
export const GET_SEARCH_LIST = 'GET_SEARCH_LIST';
export const SHOW_LOADING = 'SHOW_LOADING';
export const SHOW_SEARCH = 'SHOW_SEARCH';
export const CHANGE_SHOW_MODEL = 'CHANGE_SHOW_MODEL';

export const api_const = {
	GET_LIST: {title: '正在热映', method: 'getList'},
	GET_COMING_SOON_LIST: {title: '即将上映', method: 'getComingSoonList'},
}
export const api_type_const = {
	...api_const,
	GET_SEARCH_LIST: {title: '电影搜索', method: 'getSearchList'},
}
export const show_model_const = {
	list: {title: '列表视图'},
	grid: {title: '卡片视图'}
}

export const actions = createActions({
		[GET_LIST]: async({start = 0, count = 18, city = '武汉'} = {}) => {
			const data = await api.in_theaters({start, count, city})
			return data.subjects
		},
		[GET_COMING_SOON_LIST]: async({start = 0, count = 18, city = '武汉'} = {}) => {
			const data = await api.coming_soon(({start, count, city}))
			return data.subjects
		},
		[GET_SEARCH_LIST]: async({start = 0, count = 18, q = ''} = {}) => {
			const data = await api.search({q, start, count})
			return data.subjects
		},
		[SHOW_LOADING]: (type = 0) => type,
		[SHOW_SEARCH]: (type = 0) => type,
		[CHANGE_SHOW_MODEL]: (type = 'list') => type,
	}
)


export const reducer = handleActions({
	[GET_SEARCH_LIST]: (s, a) => s.setIn(['list'], a.payload).mergeIn(['title'], '电影搜索'),
	[GET_LIST]: (s, a) => s.setIn(['list'], a.payload).mergeIn(['title'], api_const[GET_LIST].title),
	[GET_COMING_SOON_LIST]: (s, a) => s.setIn(['list'], a.payload).mergeIn(['title'], api_const[GET_COMING_SOON_LIST].title),
	[SHOW_LOADING]: (s, a) => s.mergeIn(['show'], a.payload),
	[SHOW_SEARCH]: (s, a) => s.mergeIn(['showSearch'], a.payload),
	[CHANGE_SHOW_MODEL]: (s, a) => s.mergeIn(['showModel'], a.payload),

}, initState);

