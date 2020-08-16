import styled from 'styled-components';

export const Container = styled.div`
	margin: auto 10%;
	border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const ViewOptions = styled.div`
	margin-left: 30px;
	margin-bottom: 10px;
	display: flex;
`;

export const TextOptions = styled.p`
	padding: 10px 20px;
	font-weight: ${ props => props.bold ? "600" : "100" };
	color: ${ props => props.actived ? "var(--color-red)" : "var(--color-gray-light)" };
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
							height: 5px;
							top: 49px;
							right: 70px;
							background-color: var(--color-red);
							border-radius: 100px;
						}
					`)
				}
			}};
`;
