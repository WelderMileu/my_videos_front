import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import { FaStar } from 'react-icons/fa';
import { ContainerView, LoadingPage } from '../VideosFull/style';
import Video from '../Video';

const VideosFavorite = () => {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(false);
	const [exist, setExist] = useState(0);

	useEffect(() => {

		// Listando os videos
		(async function videos(){
			const list = await axios.get('http://localhost:3000');
			setItem(list.data);
			setLoad(true)

		})();


	},[]);

	useEffect(() => {

		// Verificando se a algum video favorito no nosso estado
		(async function verifyFavorite() {
			await item.map(elem => {
					if(elem.favorite === true) {
						setExist(1)
					}
				})
		})();

	})							

	// Loading da aplicação
	if(!load) { 
		return (
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

	}

	// Verificando se há videos favoritos
	if(exist === 0) {
		return (
			<LoadingPage>
				<p 
					style={{ fontWeight: 'Normal' }}>
					There are no videos ...
				</p>
			</LoadingPage>	
		)
	} else {
		return (
			<ContainerView>
				{item.filter((item) => {
						return item.favorite === true
					}).map(video => (
							<Video
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
	}
}

// Exportando nosso component
export default VideosFavorite;
