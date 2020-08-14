import React from 'react';
import { FaPlus } from 'react-icons/fa';

import Logo from '../../assets/images/logo.svg';
import { BtnOutline } from '../../style';
import { Navigator } from './style';

const Header = () => {
	return (
		<Navigator>

			{/* Logo da nossa aplicação */}
			<img src={Logo} alt="logo" />

			{/* Botão para inserir um novo post */}
			<BtnOutline color="var(--color-brown)">
				<FaPlus style={{ marginRight: "5px" }}/> 
				New Video
			</BtnOutline>
		
		</Navigator>
	)
}

export default Header;
