/**
 * Created by Administrator on 3/9.
 */
import React, {Component} from 'react'
import './style.scss'
import {handleClassForAsync} from '../../../store/reducers'
import {name, reducer, actions} from './action';

class Chessboard extends Component {

  render() {
    return <div>
      <span styleName="box">
      <img styleName="imgBox" src="http://cdn.iciba.com/news/2017/0308/20170308111545764.jpg"/>
      </span>
    </div>
  }
}

export default store => handleClassForAsync(store)({name, reducer, actions})(Chessboard);
