import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa'; 

import { Card, CardTitle, CardText, CardIcons, Icons } from './style'

const Video = ( props ) => {
	return (
		<Card>
			<CardIcons>
				<Icons color="var(--color-blue-light)">
					<FaPen />
				</Icons>
				<Icons color="var(--color-purple-light)">
					<FaTrash />
				</Icons>
			</CardIcons>
			<iframe 
				width="460" 
				height="215" 
				src={props.url} 
				frameborder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen>
			</iframe>
			<CardTitle>{ props.title } </CardTitle>
			<CardText>{ props.date }</CardText>
		</Card>
	)
}

export default Video;