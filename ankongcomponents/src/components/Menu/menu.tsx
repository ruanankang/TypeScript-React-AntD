import React from 'react';
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
	const {
		className,
		defaultIndex,
		mode = 'horizontal',
		style,
		onSelect
	} = props;

	const classes = classNames('menu', className, {
		[`menu-${mode}`]: mode
	});

	return <div></div>;
};
