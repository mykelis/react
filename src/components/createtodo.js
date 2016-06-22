import React from 'react';

export default class CreateTodo extends React.Component {

	render() {
			console.log(this.props.todos);

		return (
			<form>
				<input type="text" placeholder="What needs done?" />
				<button>Add</button>
			</form>

			);
	}
}