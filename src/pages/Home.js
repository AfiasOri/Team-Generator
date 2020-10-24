import React, { useEffect, useState } from 'react';
import { Container, Button } from 'semantic-ui-react';

import Names from '../components/Names';
import NumberInput from '../components/NumberInput';
import Teams from '../components/Teams';

const Home = () => {
	const [numOfPlayers, setNumOfPlayers] = useState(6);
	const [players, setPlayers] = useState([]);
	const [teams, setTeams] = useState({ team1: ['', '', ''], team2: ['', '', ''] });

	const color = 'black';

	useEffect(() => {
		let tempPlayers = [...players];
		if (tempPlayers.length < numOfPlayers) {
			for (let i = tempPlayers.length; i < numOfPlayers; i++) {
				tempPlayers.push('');
			}

			setPlayers(tempPlayers);
		} else if (tempPlayers.length > numOfPlayers) {
			setPlayers(tempPlayers.slice(0, numOfPlayers));
		}
	}, [numOfPlayers]);

	const handleNumberOfPlayersChange = e => {
		if (e.target.value <= 0) return;
		setNumOfPlayers(e.target.value);
		// if (e.target.value > numOfPlayers) setNumOfPlayers(cur => cur + 1);
		// else if (e.target.value < numOfPlayers) setNumOfPlayers(cur => cur - 1);
	};

	const handleSubmit = () => {
		const shuffle = () => {
			setPlayers([...players.sort(() => Math.random() - 0.5)]);
		};

		const divide = numTeams => {
			setTeams({
				team1: [...players.slice(0, players.length / 2)],
				team2: [...players.slice(players.length / 2, players.length)],
			});
		};

		shuffle();
		divide();
	};

	const handleInputChange = (e, index) => {
		const newPlayers = [...players];

		newPlayers[index] = e.target.value;
		setPlayers(newPlayers);
	};

	return (
		<Container style={{ marginTop: '250px' }}>
			<NumberInput value={numOfPlayers} onChange={handleNumberOfPlayersChange} color={color} />

			<Names color={color} players={players} onChange={handleInputChange} />

			<Container fluid textAlign='center' style={{ margin: '10px 0' }}>
				<Button onClick={handleSubmit} color='red' size='big'>
					Generate
				</Button>
			</Container>

			<Teams teams={teams} />
		</Container>
	);
};

export default Home;
