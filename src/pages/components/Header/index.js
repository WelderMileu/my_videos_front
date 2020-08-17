import React from 'react';
import { FaPlus } from 'react-icons/fa';

import Logo from '../../assets/images/youtube.svg';
import { Button } from '../../style';
import { Navigator } from './style';

const Header = () => {
	return (
		<Navigator>

			{/* Logo da nossa aplicação */}
			<div style={{ 
					display: "flex", 
					justifyContent: "center",
					alignItems: "center"
				}}>
				<img src={Logo} alt="logo" width="50"/>
				<p style={{ marginLeft: "3px" }}> My Videos </p>
			</div>

			{/* Botão para inserir um novo post */}
			<Button color="var(--color-black-light)">
				<FaPlus style={{ marginRight: "5px" }}/> 
				New Video
			</Button>
		
		</Navigator>
	)
}

export default Header;
