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
	user-select: none;
	padding: .375rem .75rem;
	line-height: 1.5;
	border: none;
	border-radius: 50px;
	border: 1px solid ${ props => props.color ? props.color : "var(--color-gray-light)" };
	color: ${ props => props.color ? props.color : "var(--color-gray-light)" };	
	background-color: transparent;
	cursor: pointer;
	transition: .5s ease-in-out;

	&:hover {
		background-color: ${ props => props.color  ? props.color : "var(--color-gray-light)" };
		color: var(--color-white);
		border: 1px solid var(--color-white);
	}
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	font-size: 1rem;
	line-height: 1.5;
	color: #495057;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	padding: .375rem .75rem;
	margin-top: 5px;
`; 

export const Button = styled.button`
	display: inline-block;
	font-weight: 400;
	text-align: center;
	user-select: none;
	border: 1px solid transparent;
	border-radius: .25rem;
	padding: .375rem .75rem;
	margin-top: 5px;
	font-size: 1rem;
	line-height: 1.5;
	display: flex;
	align-items: center;
	background-color: ${ props => props.color ? props.color : "var(--color-gray-light)" };
	color: ${ props => props.color ? "var(--color-white)" : "var(--color-black)" };
`;
