import React, { createContext } from 'react';
import classNames from 'classnames';
import { useState } from 'react';

type MenuMode = 'vertical' | 'horizontal';
type SelectCallback = (selectedIndex: number) => void;

export interface IMenuProps {
	defaultIndex?: number;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: SelectCallback;
}

export interface IMenuContext {
	currentItemIndex?: number;
	onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ currentItemIndex: 0 });

const Menu: React.FC<IMenuProps> = (props) => {
	const { className, defaultIndex, mode, style, children, onSelect } = props;

	const [currentSelected, setSelected] = useState(defaultIndex);

	const classes = classNames('menu', className, {
		[`menu-${mode}`]: mode
	});

	const handleClick = (itemIndex: number) => {
		setSelected(itemIndex);
		onSelect && onSelect(itemIndex);
	};

	const passedContext: IMenuContext = {
		currentItemIndex: currentSelected ? currentSelected : 0,
		onSelect: handleClick
	};

	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement =
				child as React.FunctionComponentElement<MenuItemProps>;
			const { displayName } = childElement.type;
			if (displayName === 'MenuItem' || displayName === 'SubMenu') {
				return React.cloneElement(childElement, {
					index: index.toString()
				});
			} else {
				console.error(
					'Warning: Menu has a child which is not a MenuItem component'
				);
			}
		});
	};

	return (
		<ul
			className={classes}
			style={style as React.CSSProperties}
			data-testid='test-menu'>
			<MenuContext.Provider value={passedContext}>
				{renderChildren()}
			</MenuContext.Provider>
		</ul>
	);
};

Menu.defaultProps = {
	defaultIndex: 0,
	mode: 'horizontal'
};

export default Menu;
