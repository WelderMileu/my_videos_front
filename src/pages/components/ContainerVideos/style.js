import styled from 'styled-components';

export const ContainerView = styled.div`
	margin: auto 13%;
	margin-top: 30px;
	display:flex;
	height: 50vh;
	flex-wrap: wrap;
	overflow: auto;
	
	&::-webkit-scrollbar {
		width: 1rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--color-purple-light);
		border-radius: 20px;
	}

	&::-webkit-scrollbar-track {
		background-color: var(--color-white);
		border-radius: 20px;
	}
`;