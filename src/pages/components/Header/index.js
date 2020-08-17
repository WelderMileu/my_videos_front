import React from 'react';
import { FaPlus } from 'react-icons/fa';

import Logo from '../../assets/images/logo_footer.svg';
import { Button } from '../../style';
import { Navigator } from './style';

const Header = () => {
	return (
		<Navigator>

			{/* Logo da nossa aplicação */}
			<img src={Logo} alt="logo" />

			{/* Botão para inserir um novo post */}
			<Button color="var(--color-red)">
				<FaPlus style={{ marginRight: "5px" }}/> 
				New Video
			</Button>
		
		</Navigator>
	)
}

export default Header;
