import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import axios from 'axios';

import { 
	Card, 
	CardTitle, 
	Favorite, 
	CardIcons, 
	Icons 
} from './style'

const Video = props => {

	// Função para deletar video
	async function drop(id) {
		await axios.delete(`http://localhost:3000/delete?id=${id}`)
						.then(() => alert(`ID: ${id} deletado com sucesso`))
						.catch(error => alert(`Erro: ${error}`))
	
		// Recarregando a pagina assim que o item for deletado
		// Achar uma melhor forma atualizando apenas o componet
		window.location.reload()
	}

	return (
		<Card>
			<CardIcons>
				{/* Components para o aterar */}
				<Icons 
					color="var(--color-blue-light)">
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
				width="460" 
				height="215" 
				src={props.url} 
				frameborder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen>
			</iframe>
			<CardTitle>{ props.title } </CardTitle>
			<Favorite>{ props.favorite }</Favorite>
		</Card>
	)
}

// Exportando o nosso component
export default Video;