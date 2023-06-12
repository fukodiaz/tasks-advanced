import {FC} from 'react';

import styles from './app.module.less'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App:FC = () => {

	return (
		<div className={styles.mainWrapper}>
			<p>
				tasks-advanced
			</p>
		</div>
	)
}

export default App