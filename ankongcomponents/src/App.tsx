import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
	return (
		<>
			<Alert type='primary' title='标题'>
				内容区域
			</Alert>
			<Button>Primary</Button>
			<Button disabled>Primary</Button>
			<Button btnType={ButtonType.Default} size={ButtonSize.Small}>
				Default
			</Button>
			<Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
				Danger
			</Button>
			<Button btnType={ButtonType.Link} href='https://www.baidu.com'>
				Default
			</Button>
			<Button btnType={ButtonType.Link} disabled href='https://www.baidu.com'>
				Default
			</Button>
			<Menu
				mode='vertical'
				defaultIndex={0}
				onSelect={(index) => {
					alert(index);
				}}>
				<MenuItem itemIndex={0}>0</MenuItem>
				<MenuItem itemIndex={1}>1</MenuItem>
				<MenuItem itemIndex={2} disabled>
					2
				</MenuItem>
			</Menu>
		</>
	);
}

export default App;
