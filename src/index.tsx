import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

const rootEl = document.getElementById('root');
const render = Component =>
		ReactDOM.render(
				<React.StrictMode>
					<Component/>
				</React.StrictMode>,
				rootEl
		);

render(App);

// import ModernEditor from './editor/ModernEditor';
//
// export default ModernEditor;
