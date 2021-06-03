import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
export interface IMenuItemProps {
	itemIndex?: number;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
	const { itemIndex, disabled, className, style, children } = props;

	const context = useContext(MenuContext);

	const classes = classNames('menu-item', className, {
		'is-disabled': disabled,
		'is-active': itemIndex === context.currentItemIndex
	});

	const hanleClick = () => {
		if (!disabled && context.onSelect) {
			context.onSelect(itemIndex as number);
		}
	};

	return children ? (
		<li
			className={classes}
			style={style as React.CSSProperties}
			onClick={hanleClick}>
			{children}
		</li>
	) : null;
};

export default MenuItem;
