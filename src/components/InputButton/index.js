import React from 'react';

const InputButton = props => {
	return (
		<input type="button" value={ props.value } onClick={ props.onClick } className={ props.className }/>
	);
}

export default InputButton;