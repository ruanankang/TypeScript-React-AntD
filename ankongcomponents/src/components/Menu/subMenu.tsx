import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import MenuItem from './menuItem';

export interface ISubMenuProps {
	itemIndex: number;
	title: string;
	className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
	const { itemIndex, title, className, children } = props;

	const context = useContext(MenuContext);

	const classes = classNames('sub-menu menu-item', className, {
		'is-active': context.currentItemIndex === itemIndex,
		'is-vertical': context.mode === 'vertical'
	});

	return (
		<li>
			<div className='submenu-title'>{title}</div>
		</li>
	);
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
