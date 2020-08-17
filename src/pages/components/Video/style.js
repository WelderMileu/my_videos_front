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
	color: var(--color-blue-light);
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
	display: flex;
    border: 1px solid ${props => props.color ? props.color : "var(--color-gray-light)"};
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	margin: 5px;
	cursor: pointer;
	transition: .5s ease-in-out;
	background-color: ${ props => props.color ? props.color : "" };

	svg {
		font-size: 1rem;
		color: ${props => props.color ? "var(--color-white-light)" : "var(--color-gray-light)"};
	}

	&:hover {
		background-color: var(--color-white-light);
		svg {
			color: ${ props => props.color ? props.color : "var(--color-black-light)" };
		}
	}
`;




