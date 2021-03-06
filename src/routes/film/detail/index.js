/**
 * Created by Administrator on 3/1.
 */
import React, {Component} from 'react'
import {handleClassForAsync} from '../../../store/reducers'
import './style.scss'
// import * as action from './action';
import {name, reducer, actions} from './action';
import Head from '../../../components/Head'
import Paper from 'material-ui/Paper'
import Down from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import RateStar from '../../../components/RateStar'

class FilmDetail extends Component {

	componentWillMount() {
		const {detail, actions, params:{id}} = this.props
		detail.getIn(['data', 'id']) !== id && actions.getData(id)
	}

	render() {
		const props = this.props,
			{detail, actions} = props;
		const {data, showMoreIntro} = detail.toJSON()

		return <div>
			<Head title={data.title || ''}/>
			{(!data.images) ? <div></div>
				: <div styleName="detail">
					<main styleName="mainTop">
						<div styleName="img">
							<img src={data.images.medium || ''} alt=""/>
						</div>
						<div styleName='info'>
							<div><RateStar rate={data.rating.average}/><span style={{color: '#f56d4c'}}>{data.rating.average}</span>
								<span>({data.ratings_count}人评分)</span></div>
							<div>{data.year}</div>
							<div>{data.genres.join('/')}</div>
							<div>{data.countries[0]}</div>
						</div>
					</main>
					<Paper onTouchTap={actions.changeOption.bind(this, {key: 'showMoreIntro', value: !showMoreIntro})}
								 styleName={showMoreIntro ? 'infoMore' : 'intro'}>{data.summary}
						{showMoreIntro ? '' : <Down styleName="down"/>}
					</Paper>
					<div>
						{data.casts.map(e => (
							<Paper key={e.id + e.name} styleName="casts">
								<div styleName="img"><img alt="" src={e.avatars && e.avatars.medium}/></div>
								<div styleName="info">
									<div >{e.name}</div>
								</div>
							</Paper>
						))}
					</div>
				</div>
			}

		</div>
	}

}

export default store => ({
	path: 'detail/:id',
	component: handleClassForAsync(store)({name, reducer, actions})(FilmDetail)
})



