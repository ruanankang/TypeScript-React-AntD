import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { IMenuItemProps } from './menuItem';

export interface ISubMenuProps {
	itemIndex?: number;
	title: string;
	className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
	const { itemIndex, title, className, children } = props;

	const context = useContext(MenuContext);

	const classes = classNames('menu-item submenu-item', className, {
		'is-active': context.currentItemIndex === itemIndex,
		'is-vertical': context.mode === 'vertical'
	});

	const renderChildren = () => {
		const childRenderComponent = React.Children.map(
			children,
			(child, index) => {
				const childElement =
					child as React.FunctionComponentElement<IMenuItemProps>;
				const { displayName } = childElement?.type || {};
				if (displayName === 'MenuItem') {
					return childElement;
				} else {
					console.error(
						'Error: SubMenu has a child which is not a MenuItem component'
					);
				}
			}
		);

		return <ul className={'submenu-wrap'}>{childRenderComponent}</ul>;
	};

	return (
		<li key={itemIndex as number} className={classes}>
			<div className='submenu-title'>{title}</div>
			{renderChildren()}
		</li>
	);
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
