// We only need to import the modules necessary for initial render
import React from 'react';
import Header from '../components/Header'

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
	path: '/',
	component: ({children}) => (<div id="roo">{children}</div>),
	indexRoute: {component: Header},
	childRoutes: [
		require('./act').default(store),
		require('./canvas').default(store)
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
