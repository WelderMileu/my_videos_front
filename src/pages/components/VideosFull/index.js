import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import { FaStar } from 'react-icons/fa';
import { ContainerView, LoadingPage } from './style';
import Video from '../Video';

const VideosFull = () => {
	const [item, setItem] = useState([]); // Estado para armazenar os videos
	const [load, setLoad] = useState(false); // Estado de loading

	useEffect(() => {

		// Capturando nossos videos da nossa base de dados e setando ao nosso estado.
		(async function videos(){
			const list = await axios.get('http://localhost:3000');
			setItem(list.data);
			setLoad(true)
		})();


	},[]);

	// Loading da pagina
	if(!load) { 
		return (

			// Tag do nosso loading
			<LoadingPage>
				<ReactLoading 
					type="spin"
					color="var(--color-black)"
					width="30px"
					height="5px" 
				/>
				<p>Loading ...</p> 
			</LoadingPage>
			
		)
	} else {

		// Verificando de há videos na nossa base de dados
		if(item.length > 0) {

			// Mostrando videos da nossa base de dados
			return (
				<ContainerView>
					{ 	
						item.map(video => (
							<Video
								func="() => this.videos()"
								id={ video._id }
								key={ video._id } 
								url={ video.url } 
								title={ video.title }
								favorite={ video.favorite ? <FaStar /> : "" }
							/>
						))
					}
				</ContainerView>
			)
		} else {

			// Caso não houver video na nossa base de dados
			return(
				<LoadingPage>
					<p 
						style={{ fontWeight: 'Normal' }}>
						There are no videos ...
					</p>
				</LoadingPage>
			)

		}
	}
}

// Exportando nosso component
export default VideosFull;
