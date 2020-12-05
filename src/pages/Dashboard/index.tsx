import React from 'react';

import GithubButton from './components/GithubButton';
import EmailButton from './components/EmailButton';
import SocialMedias from './components/SocialMedias';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { Content, LogoTitle, Title, About } from './styles';

const Dashboard: React.FunctionComponent = () => (
	<Content>
		{/* intro */}
		<LogoTitle>
			<p>Olá, me chamo</p>
			<p className="primary">
				Jonathas Oliveira<span>(johncovv)</span>
			</p>
			<p>sou Desenvolvedor web, profissional em front-end. Guariba-SP.</p>
		</LogoTitle>

		{/* about */}
		<About>
			Trabalho na área de Desenvolvimento Web desde 2018, neste tempo passei por
			várias tecnologias, como <span>PHP</span>, <span>Vue</span> até que me
			encontrei na stack <span className="primary">Full Javascript</span>, com
			desenvolvimento utilizando tecnologias <span>Javascript</span> como{' '}
			<span>NodeJs</span>, <span>React</span> e <span>React Native</span>.
		</About>

		<GithubButton>Visite meu Github</GithubButton>

		{/* contact */}
		<Title style={{ marginTop: 25 }}>Contato</Title>
		<EmailButton>contato@johncovv.com</EmailButton>

		<SocialMedias />

		{/* skills */}
		<Title style={{ marginTop: 120, paddingTop: 10 }} id="skills">
			Skills
		</Title>
		<Skills />

		{/* projects */}
		<Title style={{ marginTop: 120, paddingTop: 10 }} id="projects">
			Projetos
		</Title>
		<Projects />
	</Content>
);

export default Dashboard;
