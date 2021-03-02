import React, { useEffect } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import GithubButton from './components/GithubButton';
import EmailButton from './components/EmailButton';
import SocialMedias from '../../components/SocialMedias';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { Content, LogoTitle, Title, About } from './styles';

const Dashboard: React.FunctionComponent = () => {
	const location = useLocation();
	const navigation = useHistory();

	useEffect(() => {
		if (!location.state) return;

		const { scrollTo } = location.state as { scrollTo?: string };

		if (!scrollTo) return;

		const elementToScroll = document.querySelector(`#${scrollTo}`) as
			| HTMLDivElement
			| undefined;

		if (elementToScroll) {
			elementToScroll.scrollIntoView();

			navigation.replace('/', { scrollTo: undefined });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
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
				Trabalho na área de Desenvolvimento Web desde 2018, neste tempo passei
				por várias tecnologias, como <span>PHP</span>, <span>Vue</span> até que
				me encontrei na stack <span className="primary">Full Javascript</span>,
				com desenvolvimento utilizando tecnologias <span>Javascript</span> como{' '}
				<span>NodeJs</span>, <span>React</span> e <span>React Native</span>.
			</About>

			<GithubButton>Visite meu Github</GithubButton>

			{/* contact */}
			<Title style={{ marginTop: 25 }}>Contato</Title>
			<EmailButton>contato@johncovv.com</EmailButton>

			<SocialMedias style={{ marginTop: 15 }} />

			{/* skills */}
			<Title style={{ paddingTop: 130 }} id="skills">
				Skills
			</Title>

			<Skills />

			{/* projects */}
			<Title style={{ paddingTop: 130 }} id="projects">
				Projetos
			</Title>

			<Projects />
		</Content>
	);
};

export default Dashboard;
