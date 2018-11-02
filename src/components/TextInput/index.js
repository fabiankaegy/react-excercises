import React from 'react';
import './style.css';

/*
 * Create a component called TextInput that returns a form
 * with a text input and a submit button in it.
 * Attach the onSubmit event to the one passed down via the props
 */
const TextInput = props => {
	return (
		<form onSubmit={props.onSubmit}>
			<input type="text" name="TextInput" />
			<input type="submit" />
		</form>
	);
}

export default TextInput;