import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert';

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
		</>
	);
}

export default App;
