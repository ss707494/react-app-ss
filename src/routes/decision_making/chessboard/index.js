/**
 * Created by Administrator on 3/9.
 */
import React, {Component} from 'react'
import './style.scss'
import {handleClassForAsync} from '../../../store/reducers'
import {name, reducer, actions} from './action';

import _ from 'lodash'
class Chessboard extends Component {

  componentWillMount() {
    /**
     * qsort []     = []
     * qsort (x:xs) = qsort (filter (< x) xs) ++ [x] ++ qsort (filter (>= x) xs)
     */
    const qsort = arr => arr.length < 2
        ? arr
        : qsort(_.filter(_.drop(arr), (e) => e < arr[0])).concat(arr[0]).concat(qsort(_.filter(_.drop(arr), (e) => e >= arr[0])))

    let a = [1, 3, 4, 5, 6, 7, 8, 9, 1];
    const qsort2 = qsort(a);
    console.log(qsort2);

  }

  render() {
    return <div>
      <span styleName="box">
      </span>
    </div>
  }
}

export default store => handleClassForAsync(store)({name, reducer, actions})(Chessboard);
