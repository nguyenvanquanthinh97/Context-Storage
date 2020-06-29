import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	render() {
		return (
			<LanguageContext.Consumer>
				{({ language }) => {
					const text = language === 'english' ? 'Name' : 'Tên';
					return (
						<div className="ui field">
							<label>{text}</label>
							<input name="name" type="text" />
						</div>
					);
				}}
			</LanguageContext.Consumer>
		);
	}
}

export default Field;
