import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ContainerView } from './style';
import Video from '../Video';

const ContainerVideos = () => {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		async function videos(){
			const list = await axios.get('http://localhost:3000');
			setItem(list.data);
			setLoad(true)
		}

		videos()
	},[])

	console.log(item)

	if(!load) { return <p>Carregando ...</p> } 
		else {
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
