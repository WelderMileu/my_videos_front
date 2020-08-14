import React from 'react';

import { Container, ViewOptions, TextOptions } from './style';
import ContainerVideos from '../ContainerVideos';

const Content = () => {
	return (
		<React.Fragment>
			<Container>
				<ViewOptions>
					<TextOptions 
						bold 
						color="var(--color-purple-light)" 
						actived>
						Todos os Videos
					</TextOptions>
					<TextOptions bold>
						Favoritos
					</TextOptions>
				</ViewOptions>
			</Container>
			<ContainerVideos />
		</React.Fragment>
	)
}

export default Content;
