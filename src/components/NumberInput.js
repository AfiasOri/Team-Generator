import React from 'react';
import { Segment, Header, Input } from 'semantic-ui-react';

const NumberInput = ({ color, onChange, value }) => {
	return (
		<Segment textAlign='center' padded inverted color={color} className='box'>
			<Header>Number Of Evionim</Header>
			<Input type='number' onChange={onChange} value={value} />
		</Segment>
	);
};

export default NumberInput;
