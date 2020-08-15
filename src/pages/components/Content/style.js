import styled from 'styled-components';

export const Container = styled.div`
	margin: auto 10%;
	border-bottom: 1px solid var(--color-gray-light)
`;

export const ViewOptions = styled.div`
	margin-left: 30px;
	margin-bottom: 10px;
	display: flex;
`;

export const TextOptions = styled.p`
	padding: 10px 20px;
	font-weight: ${ props => props.bold ? "600" : "100" };
	color: ${ props => props.color ? props.color : "var(--color-gray-light)" };
	position: relative;
	width: 200px;
	text-align: center;
	cursor: pointer;

	&:before ${ props => {
				if(props.actived) {
					return (`
						{
							content:"";
							position: absolute;
							width: 100px;
							height: 10px;
							top: 47px;
							right: 70px;
							background-color: var(--color-purple-light);
							border-radius: 20px;
						}
					`)
				}
			}};
`;
