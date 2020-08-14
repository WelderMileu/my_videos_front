import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FooterContainer, SocialIcon, SocialMidia, LogoIconFooter } from './style';
import LogoFooter from '../../assets/images/logo_footer.svg';

const Footer = () => {
	return (
		<FooterContainer>
		
			{/* Icones da minhas redes sociais de development */}
			<SocialMidia>
				<SocialIcon>
					<FaGithub />
					GitHub
				</SocialIcon>
				<SocialIcon color="var(--color-blue)">
					<FaLinkedin/>
					Linkedin
				</SocialIcon>
			</SocialMidia>

			{/* A Sub-logo da nossa aplicação */}
			<LogoIconFooter>
				<img src={LogoFooter} alt="Footer icons"/>
			</LogoIconFooter>
		</FooterContainer>
	)
}

export default Footer;
