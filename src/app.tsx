import styles from './app.module.scss';
import React, {useEffect, useRef} from 'react';
import ModernEditor from './editor/ModernEditor';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App() {

	return (
			<div className={cx('container')}>
				<header>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico"/>
				</header>
				<main className={styles.main}>
					<div className={styles.editor}>
						<ModernEditor/>
					</div>
				</main>
			</div>
	);
}

export default App;
