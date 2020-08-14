import styled from 'styled-components';

export const Card = styled.div`
	padding: 10px;
`;

export const CardTitle = styled.p`
	font-weight: bold;
	color: var(--color-gray-dark);
	max-width: 460px;
`;

export const Favorite = styled.p`
	font-size: 1.2rem;
	color: var(--color-purple-light);
	margin-top: 5px;
	display: flex;
	justify-content: flex-start;
`;

export const CardIcons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Icons = styled.div`
	width: 30px;
	height: 30px;
	border: 1px solid ${props => props.color ? props.color : "var(--color-gray-light)"};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px;
	border-radius: 50px;
	cursor: pointer;
	transition: .5s ease-in-out;

	svg {
		font-size: 1rem;
		color: ${props => props.color ? props.color : "var(--color-gray-light)"};
	}

	&:hover {
		background-color: ${props => props.color ? props.color : "var(--color-gray-light)"};
		svg {
			color: var(--color-white);
		}
	}
`;




