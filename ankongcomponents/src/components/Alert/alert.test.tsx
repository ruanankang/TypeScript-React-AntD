import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Alert, { IAlertProps } from './alert';

const defaultProps: IAlertProps = {
	title: '标题',
	type: 'primary',
	closable: true,
	customClose: '关闭'
};

const testSuccessAlertProps: IAlertProps = {
	type: 'success'
};

describe('Alert Component', () => {
	it('should render the correct default alert', async () => {
		const wrapper = render(<Alert {...defaultProps}>提示框</Alert>);
		const element = wrapper.getByText('提示框');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('P');
		expect(element).toHaveClass('alert-message');
		expect(element.parentNode).toHaveClass('alert alert-primary');

		const titleElement = wrapper.queryByText('标题') as HTMLElement;
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveClass('alert-title');
		expect(titleElement.parentNode).toBe(element.parentNode);

		const iconElement = wrapper.queryByText('关闭') as HTMLElement;
		fireEvent.click(iconElement);
		await waitFor(() => {
			expect(element).not.toBeInTheDocument();
			expect(titleElement).not.toBeInTheDocument();
		});
	});

	it('should render the correct component based on different props', async () => {
		const wrapper = render(<Alert {...testSuccessAlertProps}>提示框</Alert>);
		const element = wrapper.queryByText('提示框') as HTMLElement;
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('P');
		expect(element).toHaveClass('alert-message');
		expect(element.parentNode).toHaveClass('alert alert-success');
	});
});
