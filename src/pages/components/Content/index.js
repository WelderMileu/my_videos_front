import React, { useState } from 'react';

import { Container, ViewOptions, TextOptions } from './style';
import VideosFull from '../VideosFull';
import VideosFavorite from '../VideosFavorite';

const Content = () => {
	const [ page, setPage ] = useState(1);

	return (
		<React.Fragment>
			<Container>

				{/* Menu da nossa aplicação */}
				<ViewOptions>
					<TextOptions
						onClick= {() => setPage(1) } 
						actived={ page === 1 ? true : false }
						>
						Todos os Videos
					</TextOptions>
					<TextOptions
						onClick={() => setPage(2) }
						actived={ page === 1 ? false : true }  
						>
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
