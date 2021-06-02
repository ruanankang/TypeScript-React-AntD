import React from 'react';
import classNames from 'classnames';

export interface IMenuItemProps {
	itemIndex?: number;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
	const { itemIndex, disabled, className, style, children } = props;

	const classes = classNames('menu-item', className, {
		'is-disabled': disabled
	});

	return children ? (
		<li className={classes} style={style}>
			{children}
		</li>
	) : null;
};

export default MenuItem;
