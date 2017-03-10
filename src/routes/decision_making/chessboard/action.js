/**
 * Created by Administrator on 3/1.
 */
import {createActions, handleActions} from 'redux-actions'
import Immutable from 'immutable';

export const name = 'chessboard'

const initState = Immutable.fromJS({

})

export const DEMO = 'DEMO';

export const actions = createActions({

  }, DEMO
)


export const reducer = handleActions({
  [DEMO]: (s, a) => s
}, initState);

