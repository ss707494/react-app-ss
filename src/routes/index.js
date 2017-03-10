// We only need to import the modules necessary for initial render
import Home from '../components/Home'
import Layout from '../components/Layout'

export const createRoutes = (store) => ({
	path: '/',
	component: Layout,
	indexRoute: Home,
	childRoutes: [
    require('./film').default(store),
		require('./canvas').default(store),
    require('./decision_making').default(store),
		require('./redirect').default()
	]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
 using getChildRoutes with the following signature:

 getChildRoutes (location, cb) {
 require.ensure([], (require) => {
 cb(null, [
 // Remove imports!
 require('./Counter').default(store)
 ])
 })
 }

 However, this is not necessary for code-splitting! It simply provides
 an API for async route definitions. Your code splitting should occur
 inside the route `getComponent` function, since it is only invoked
 when the route exists and matches.
 */

export default createRoutes
