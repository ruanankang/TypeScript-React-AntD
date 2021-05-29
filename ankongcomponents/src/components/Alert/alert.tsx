import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';

export type AlertType = 'success' | 'primary' | 'warning' | 'danger';

interface IAlertProps {
	type: AlertType;
	title?: string;
	closable?: boolean;
	customClose?: string;
	onClose?: () => void;
	children?: React.ReactText;
}

const Alert: React.FC<IAlertProps> = ({
	type = 'primary',
	title,
	closable = true,
	customClose,
	onClose,
	children
}) => {
	const classes = classnames('alert', {
		[`alert-${type}`]: type
	});

	const [visible, setVisible] = useState(true);

	const handleClick = () => {
		setVisible(false);
		onClose && onClose();
	};
	return visible ? (
		<div className={classes}>
			{title && <h3 className='alert-title'>{title}</h3>}
			<p className='alert-message'>{children}</p>
			{closable && (
				<i onClick={handleClick}>{customClose ? customClose : '关闭'}</i>
			)}
		</div>
	) : null;
};

export default Alert;
