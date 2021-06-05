import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Menu, { IMenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: IMenuProps = {
	defaultIndex: 0,
	onSelect: jest.fn(),
	className: 'test'
};

const testVerProps: IMenuProps = {
	defaultIndex: 0,
	mode: 'vertical'
};

const generateMenu = (props: IMenuProps) => {
	return (
		<Menu {...props}>
			<MenuItem itemIndex={0}>active</MenuItem>
			<MenuItem disabled itemIndex={1}>
				disabled
			</MenuItem>
			<MenuItem itemIndex={2}>xyz</MenuItem>
		</Menu>
	);
};

let wrapper: RenderResult,
	menuElement: HTMLElement,
	activeElement: HTMLElement,
	disabledElement: HTMLElement;

describe('Menu and MenuItem component in default(horizontal) mode', () => {
	beforeEach(() => {
		wrapper = render(generateMenu(testProps));
		menuElement = wrapper.getByTestId('test-menu');
		activeElement = wrapper.getByText('active');
		disabledElement = wrapper.getByText('disabled');
	});
	it('should render correct Menu and MenuItem based on default props', () => {
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass('menu test');
		expect(menuElement.querySelectorAll(':scope > li').length).toEqual(3);
		expect(activeElement).toHaveClass('menu-item is-active');
		expect(disabledElement).toHaveClass('menu-item is-disabled');
	});
	it('click items should change active and call the right callback', () => {
		const thirdItem = wrapper.getByText('xyz');
		fireEvent.click(thirdItem);
		expect(thirdItem).toHaveClass('is-active');
		expect(activeElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).toHaveBeenCalledWith(2);
		fireEvent.click(disabledElement);
		expect(disabledElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
	});
});
