import styled from 'styled-components';

export const ContainerView = styled.div`
	margin: auto 13%;
	margin-top: 30px;
	display:flex;
	height: 50vh;
	flex-wrap: wrap;
	overflow: auto;
	
	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--color-black-light);
		border-radius: 20px;
	}

	&::-webkit-scrollbar-track {
		background-color: var(--color-white);
		border-radius: 20px;
	}
`;

export const LoadingPage = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	
	p {
		margin-top: 30px;
		font-weight: bold;
		color: var(--color-gray-light)
	}
`;








