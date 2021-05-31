import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './alert';

const defaultProps = {
	title: '标题'
};

describe('Alert Component', () => {
	it('should render the correct default alert', () => {
		const wrapper = render(<Alert {...defaultProps}>内容</Alert>);
	});
});
