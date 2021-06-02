import React, { createContext } from 'react';
import classNames from 'classnames';

type MenuMode = 'vertical' | 'horizontal';

export interface IMenuProps {
	defaultIndex?: number;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<IMenuProps> = (props) => {
	const { className, defaultIndex, mode, style, children, onSelect } = props;

	const classes = classNames('menu', className, {
		[`menu-${mode}`]: mode
	});

	return (
		<ul className={classes} style={style}>
			{children}
		</ul>
	);
};

Menu.defaultProps = {
	defaultIndex: 0,
	mode: 'horizontal'
};

export default Menu;
