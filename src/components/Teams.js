import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const styles = {
	card: {
		border: '2px solid black',
		opacity: '0.8',
	},
};

const Teams = ({ teams }) => (
	<Grid columns={2} textAlign='center' style={{ opacity: '0.8' }}>
		<Grid.Column>
			<Card fluid style={styles.card}>
				<Card.Content>
					<Card.Header>Team 1</Card.Header>
					<Card.Description>
						{teams.team1.map((player, index) => (
							<p key={index}>{player}</p>
						))}
					</Card.Description>
				</Card.Content>
			</Card>
		</Grid.Column>
		<Grid.Column>
			<Card fluid style={styles.card}>
				<Card.Content>
					<Card.Header>Team 2</Card.Header>
					<Card.Description>
						{teams.team2.map((player, index) => (
							<p key={index}>{player}</p>
						))}
					</Card.Description>
				</Card.Content>
			</Card>
		</Grid.Column>
	</Grid>
);

export default Teams;
