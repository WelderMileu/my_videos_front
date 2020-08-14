import styled from 'styled-components';

export const View = styled.div`
	display: block;
`;

export const BtnOutline = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-weight: 400;
	width: 150px;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	use-select: none;
	padding: .375rem .75rem;
	line-height: 1.5;
	border: none;
	border-radius: .25rem;
	border: 1px solid ${ props => props.color ? props.color : "var(--color-gray-light)" };
	color: ${ props => props.color ? props.color : "var(--color-gray-light)" };	
	background-color: transparent;
	cursor: pointer;
	transition: .5s ease-in-out;

	&:hover {
		background-color: var(--color-purple-light);
		color: var(--color-white);
		border: 1px solid var(--color-white);
	}
`;
