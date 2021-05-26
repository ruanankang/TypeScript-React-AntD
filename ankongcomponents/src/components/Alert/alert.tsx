import React from 'react';

export type AlertType = 'success' | 'primary' | 'warning' | 'danger';

interface IAlertProps {
	type: AlertType;
	title?: string;
}

const Alert: React.FC<IAlertProps> = (props) => {
	return;
};

export default Alert;
