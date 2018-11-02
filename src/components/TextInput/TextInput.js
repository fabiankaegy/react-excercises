import React from 'react';

const TextInput = props => {
	return (
		<form onSubmit={props.onSubmit}>
			<input type="text" name="TextInput" />
			<input type="submit" />
		</form>
	);
}

export default TextInput;