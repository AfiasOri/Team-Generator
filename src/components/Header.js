import React from 'react';

import { Menu } from 'semantic-ui-react';

const styles = {
	menu: {
		height: '80px',
	},
};

const Header = () => {
	return (
		<Menu style={styles.menu} color='black' inverted borderless size='massive'>
			<Menu.Item position='left'> </Menu.Item>
			<Menu.Item position='left'>Random Team Generator</Menu.Item>
		</Menu>
	);
};

export default Header;
