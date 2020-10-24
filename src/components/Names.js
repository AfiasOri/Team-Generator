import React from 'react';
import { Segment, Input, Header } from 'semantic-ui-react';

const Names = ({ color, players, onChange }) => {
	const renderInputs = players.map((player, index) => (
		<Input key={index} style={{ padding: '10px' }} type='text' value={player} onChange={e => onChange(e, index)} />
	));

	return (
		<Segment textAlign='center' padded inverted color={color} className='box'>
			<Header>EvioNames</Header>
			{renderInputs}
		</Segment>
	);
};

export default Names;
