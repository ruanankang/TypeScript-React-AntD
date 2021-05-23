import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

// test('our first react test case', () => {
// 	const wrapper = render(<Button>Nice</Button>);
// 	const element = wrapper.queryByText('Nice');
// 	expect(element).toBeInTheDocument();
// });

const defaultProps = {
	onClick: jest.fn()
};

const testProps: ButtonProps = {
	btnType: ButtonType.Primary,
	size: ButtonSize.Large,
	className: 'klass'
};

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn()
};

describe('Button component', () => {
	it('should render the correct default button', () => {
		const wrapper = render(<Button {...defaultProps}>Nice</Button>);
		const element = wrapper.getByText('Nice') as HTMLButtonElement;
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('BUTTON');
		expect(element).toHaveClass('btn btn-default');
		expect(element.disabled).toBeFalsy();
		// 测试事件
		fireEvent.click(element);
		expect(defaultProps.onClick).toHaveBeenCalled();
	});
	it('should render the correct component based on different props', () => {
		const wrapper = render(<Button {...testProps}>Nice</Button>);
		const element = wrapper.getByText('Nice');
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(`btn-primary klass btn-primary btn-${testProps.size}`);
	});
	it('should render a link when btnType equals link and href is provided', () => {});
	it('should render disabled button when disabled set to true', () => {});
});
