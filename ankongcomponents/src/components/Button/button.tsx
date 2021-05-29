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

// 所有button原生属性 （交叉类型）
type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;

// 所有a标签原生属性 （交叉类型）
type AnchorButtonProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;

// Partial将所有属性定义成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * 按钮 Button
 */
const Button: React.FC<ButtonProps> = (props) => {
	const { className, btnType, size, disabled, children, href, ...restProps } =
		props;

	const classes = classnames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled
	});

	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href} {...restProps}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled} {...restProps}>
				{children}
			</button>
		);
	}
};

// 按钮默认值
Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default
};

export default Button;
