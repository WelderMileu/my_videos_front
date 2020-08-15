import React, { useState } from 'react';

import { Container, ViewOptions, TextOptions } from './style';
import VideosFull from '../VideosFull';
import VideosFavorite from '../VideosFavorite';

const Content = () => {
	const [ page, setPage ] = useState(1);

	// Alternando options selecionadas.
	async function fillter() {
		const OptionsMenu = await document.querySelectorAll('p');
		const FullVideos = OptionsMenu[0];
		const FavoriteVideos = OptionsMenu[1];

		if (page === 1) {
			FullVideos.classList.add('hOqFPX','jULatB')
			FullVideos.classList.remove('fbNsco','cYtBFy')

			FavoriteVideos.classList.remove('hOqFPX','jULatB')
			FavoriteVideos.classList.add('fbNsco','cYtBFy')
		} else {
			FullVideos.classList.remove('hOqFPX','jULatB')
			FullVideos.classList.add('fbNsco','cYtBFy')
			
			FavoriteVideos.classList.add('hOqFPX','jULatB')
			FavoriteVideos.classList.remove('fbNsco','cYtBFy')
		}
	}

	fillter()

	return (
		<React.Fragment>
			<Container>

				{/* Menu da nossa aplicação */}
				<ViewOptions>
					<TextOptions
						onClick= { () => setPage(1) } 
						bold 
						actived
						color="var(--color-purple-light)">
						Todos os Videos
					</TextOptions>
					<TextOptions
						onClick={() => setPage(2) }  
						bold>
						Videos Favoritos
					</TextOptions>
				</ViewOptions>
			</Container>

			{/* Alternando paginas */}
			{ page === 1 ? <VideosFull /> : <VideosFavorite /> }
		
		</React.Fragment>
	)
}

export default Content;
