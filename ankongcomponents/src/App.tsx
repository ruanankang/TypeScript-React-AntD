import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
