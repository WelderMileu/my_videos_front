import styled from 'styled-components';


export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	bottom: 0;
	position: absolute;
	padding: 2% 11%;
	border-top: 2px solid var(--color-gray-light);
	background-color: var(--color-white-light);
	z-index:1;
`

export const SocialMidia = styled.div`
	display: flex;
	flex-direction: row;
`

export const SocialIcon = styled.div`
	display: flex;
	align-items: center;
	padding-left: 20px;

	svg {
		font-size: 25px;
		margin-right: 5px;
		color: ${ props => props.color ? props.color : "var(--color-black-light)" }
	}
`

export const LogoIconFooter = styled.div`
	display: block;
`
