import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FooterContainer, SocialIcon, SocialMidia, LogoIconFooter } from './style';
import Logo from '../../assets/images/youtube.svg';

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
				<div style={{ 
						display: "flex", 
						justifyContent: "center",
						alignItems: "center"
					}}>
					<img src={Logo} alt="logo" width="50"/>
					<p style={{ marginLeft: "3px" }}> My Videos </p>
				</div>
			</LogoIconFooter>
		</FooterContainer>
	)
}

export default Footer;
