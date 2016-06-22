import React from 'react';
import CreateTodo from './createtodo';
import TodosList from './todoslist';

const todos = [ 
{
	task: 'Make list with react',
	isCompleted: false

},
{
	task: 'Test list',
	isCompleted: true
}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos:todos
		}
	}

	render() {
		return (
			<div>
				<h1>React Todo App</h1>
				<CreateTodo />
				<TodosList todos={this.state.todos} />
			</div>
		);
	}
}