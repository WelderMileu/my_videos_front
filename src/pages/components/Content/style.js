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
	font-weight: ${ props => props.actived ? "600" : "100" };
	color: ${ props => props.actived ? "var(--color-black-light)" : "var(--color-gray-light)" };
	position: relative;
	width: 200px;
	text-align: center;
	cursor: pointer;
	user-select: none;

	&:before ${ props => {
				if(props.actived) {
					return (`
						{
							content:"";
							position: absolute;
							width: 100px;
							height: 5px;
							top: 51px;
							right: 50px;
							background-color: var(--color-black-light);
							border-radius: 100px;
						}
					`)
				}
			}};
`;
