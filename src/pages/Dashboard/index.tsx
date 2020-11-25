import React from 'react';

import GithubButton from './components/GithubButton';
import EmailButton from './components/EmailButton';
import SocialMedias from './components/SocialMedias';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { Content, LogoTitle, JobTitle, Title, About } from './styles';

const Dashboard: React.FunctionComponent = () => (
	<Content>
		{/* intro */}
		<LogoTitle>John Covv</LogoTitle>
		<JobTitle>Desenvolvedor Web</JobTitle>

		{/* about */}
		<About>
			Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
			Velit officia consequat duis enim velit mollit. Exercitation veniam
			consequat sunt nostrud amet.
		</About>

		<GithubButton>Visualizar Github</GithubButton>

		{/* contact */}
		<Title style={{ marginTop: 25 }}>Contato</Title>
		<EmailButton>contato@johncovv.com</EmailButton>

		<SocialMedias />

		{/* skills */}
		<Title style={{ marginTop: 120 }}>Skills</Title>
		<Skills />

		{/* projects */}
		<Title style={{ marginTop: 120 }}>Projetos</Title>
		<Projects />
	</Content>
);

export default Dashboard;
