import React from 'react';
import classnames from 'classnames';

// 按钮尺寸枚举
export enum ButtonSize {
	Large = 'lg',
	Small = 'sm'
}

// 按钮类型枚举
export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link'
}

// Button props类型接口
interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	children: React.ReactText;
	href?: string;
}

/**
 * 按钮 Button
 */
const Button: React.FC<BaseButtonProps> = (props) => {
	const { btnType, size, disabled, children, href } = props;

	const classes = classnames('btn', {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled
	});

	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled}>
				{children}
			</button>
		);
	}
};

// 按钮默认值
Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Primary
};

export default Button;
