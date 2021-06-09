import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

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
				defaultIndex={0}
				onSelect={(index) => {
					alert(index);
				}}>
				<MenuItem>0</MenuItem>
				<MenuItem>1</MenuItem>
				<MenuItem disabled>2</MenuItem>
				<SubMenu title='test'>
					<MenuItem>3</MenuItem>
					<MenuItem>4</MenuItem>
				</SubMenu>
			</Menu>
		</>
	);
}

export default App;
