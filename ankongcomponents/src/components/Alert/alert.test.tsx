import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { IAlertProps } from './alert';

const defaultProps: IAlertProps = {
	title: '标题',
	type: 'primary',
	closable: true,
	customClose: '关闭'
};

describe('Alert Component', () => {
	it('should render the correct default alert', () => {
		const wrapper = render(<Alert {...defaultProps}>提示框</Alert>);
		const element = wrapper.getByText('提示框');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('P');
	});
});
