import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import Logo from '../../assets/images/youtube.svg';
import { Button } from '../../style';
import { Navigator, LogoContainer } from './style';
import FormularioAdd from '../FormAdd';

const Header: React.FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<Navigator>
			<LogoContainer>
				<img 
					src={Logo} 
					alt="logo" 
					width="50"
				/>

				<p style={{ marginLeft: "3px" }}> 
					My Videos 
				</p>
			</LogoContainer>

			{/* Botão para inserir um novo post */}
			<Button
				onClick={()=> setOpen(true) } // Função para abrir o formulario de adicionar video
				color="var(--color-black-light)"
			>
				<FaPlus style={{ marginRight: "5px" }}/> 
				New Video
			</Button>
			<FormularioAdd 
				block={ open } 
				close={() => setOpen(false)}
			/>
		</Navigator>
	)
}

// Exportando nosso component
export default Header;
