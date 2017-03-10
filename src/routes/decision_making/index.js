/**
 * Created by Administrator on 3/9.
 */

export default (store) => ({
  path: 'decision',
  getComponent: (location, callback) => require.ensure([], require => callback(null, require('./chessboard').default(store)))
});

