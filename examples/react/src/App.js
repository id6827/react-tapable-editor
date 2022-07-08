import styles from './App.module.css';
import React, {useEffect, useRef} from 'react'
import './Draft.css';
import ModernEditor from 'react-tapable-editor';

function App() {
	const forwardRef = useRef(null);

	useEffect(() => {
		console.log(forwardRef);
		if (forwardRef.current) {
			console.log(forwardRef.current);
		}
	}, [forwardRef])

	return (
			<div className={styles.container}>
				<header>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico"/>
				</header>
				<main className={styles.main}>
					<div className={styles.editor}>
						<ModernEditor
								style={{background:'red'}}
								placeholder="tell a story"
								forwardRef={forwardRef}
						/>
					</div>
				</main>
			</div>
	);
}

export default App;
