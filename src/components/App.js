import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	state = { language: 'english' };

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i onClick={() => this.setState({ language: 'english' })} className="us flag" />
					<i onClick={() => this.setState({ language: 'vietnam' })} className="vn flag" />
				</div>
				<ColorContext.Provider value="red">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
