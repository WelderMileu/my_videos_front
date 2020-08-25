import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import axios from 'axios';

import { 
	Card, 
	CardTitle, 
	Favorite, 
	CardIcons, 
	Icons 
} from './style'

import FormularioUpdate from '../FormUpdate';

const Video = props => {
	const [ open, setOpen ] = useState(false);

	// Função para deletar video
	async function drop(id) {
		await axios.delete(`http://localhost:3000/delete?id=${id}`)
						.then(() => alert(`ID: ${id} deletado com sucesso`))
						.catch(error => alert(`Erro: ${error}`))
		
						// Recarregando a pagina após o drop
		window.location.reload()
	}

	function update(id) {
		setOpen(true)
		console.log(id);
	}

	return (
		<Card>
			<CardIcons>
				{/* Components para o aterar */}
				<Icons 
					color="var(--color-blue-light)"
					onClick={ () => update(props.id) }
					>
					<FaPen />
				</Icons>

				{/* Components para o deletar */}
				<Icons 
					color="var(--color-blue)" 
					onClick={() => drop(props.id)}>
					<FaTrash />
				</Icons>
			</CardIcons>

			{/* Iframe que contem o video */}
			<iframe 
				title="my video"
				width="460" 
				height="215" 
				src={props.url} 
				frameBorder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen>
			</iframe>
			<CardTitle>{ props.title } </CardTitle>
			<Favorite>{ props.favorite }</Favorite>

			<FormularioUpdate 
				block={ open } 
				close={ () => setOpen(false) }
				title={ props.title }
				url={ props.url }
			/>
		</Card>
	)
}

// Exportando o nosso component
export default Video;