import React, { Component } from 'react'
import { DatePicker, Button } from 'antd';
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

export default class App extends Component {
	onChange = (date, dateString) => {
		console.log(date, dateString);
		return 
	}
	render() {
		return (
			<div>
				App
				<button>点我...</button>
				<Button type="primary">按钮1</Button>
				<Button >按钮2</Button>
				<Button type="link">按钮3</Button>
				<Button type="primary" icon={<SearchOutlined />}>Search</Button>
				<WechatOutlined />
				<WeiboOutlined />
				<DatePicker onChange={this.onChange} />
				<RangePicker/>
			</div>
		)
	}
}
