import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<div>
				<div class="row">
					<div class="col-xs-offset-2 col-xs-8">
						<div class="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-2 col-xs-offset-2">
						<div class="list-group">
							{/* 原生html靠<a>跳转到不同的页面 */}
							{/* <a class="list-group-item active" href="./about.html">About</a>
							<a class="list-group-item" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件 */}
							<Link className='list-group-item' to="/about">About</Link>
							<Link className='list-group-item' to="/home">Home</Link>
						</div>
					</div>
					<div class="col-xs-6">
						<div class="panel">
							<div class="panel-body">
								??????
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
