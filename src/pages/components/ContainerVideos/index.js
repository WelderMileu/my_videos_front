import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import { ContainerView, LoadingPage } from './style';
import Video from '../Video';

const ContainerVideos = () => {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {

		(async function videos(){
			const list = await axios.get('http://localhost:3000');
			setItem(list.data);
			setLoad(true)
		})();

	},[])

	console.log(item)

	if(!load) { 
		return (
			<LoadingPage>
				<ReactLoading 
					type="spin"
					color="var(--color-purple-light)"
					width="30px"
					height="5px"
				/>
				<p>Carregando ...</p> 
			</LoadingPage>
		)
	} else {
		return (
			<ContainerView>
				{ item.map(video => (
						<Video 
							key={video._id} 
							url={video.url} 
							title={video.title}
							date={video._id}
						/>
					))
				}
			</ContainerView>
		)
	}
}

export default ContainerVideos;
