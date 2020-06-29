import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;
	render() {
		const { onLanguageChange } = this.context;
		return (
			<div>
				Select a language:
				<i style={{ cursor: 'pointer' }} onClick={() => onLanguageChange('english')} className="us flag" />
				<i style={{ cursor: 'pointer' }} onClick={() => onLanguageChange('vietnam')} className="vn flag" />
			</div>
		);
	}
}

export default LanguageSelector;
