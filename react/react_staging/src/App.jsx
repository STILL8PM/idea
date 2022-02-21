import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
	//初始化状态
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: false },
			{ id: '003', name: '打代码', done: false },
			{ id: '004', name: '逛街', done: true },
		]
	}
	//addTodo用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj) => {
		//获取原todos
		const { todos } = this.state
		//追加一个todo
		const newTodos = [todoObj, ...todos]
		//更新状态
		this.setState({ todos: newTodos })
	}
	//updateTodo用于更新一个todo对象
	updateTodo = (id, done) => {
		//获取原todos
		const { todos } = this.state
		//id匹配，加工数据
		const newTodos = todos.map((todoObj) => {
			if (todoObj.id === id) return { ...todoObj, done }
			else return todoObj
		})
		this.setState({ todos: newTodos })
	}
	//deleteTodo用于删除一个todo对象
	deleteTodo = (id) => {
		//获取原来的todos
		const { todos } = this.state
		//删除指定id的todo对象
		const newTodos= todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos:newTodos})

	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer />
				</div>
			</div>
		)
	}
}
