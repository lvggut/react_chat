import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
	return (
		<a onClick={onClick} className="button large" href="https://">
			Start Chat
		</a>
	);
};

export default Button;
