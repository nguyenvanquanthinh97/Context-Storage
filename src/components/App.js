import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<ColorContext.Provider value="red">
						<LanguageSelector />
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
