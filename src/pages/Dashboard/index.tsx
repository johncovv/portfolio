import React from 'react';

import GithubButton from './components/GithubButton';
import EmailButton from './components/EmailButton';

import { Content, LogoTitle, JobTitle, Title, About } from './styles';

const Dashboard: React.FunctionComponent = () => (
	<Content>
		<LogoTitle>Jonathas Oliveira</LogoTitle>
		<JobTitle>Desenvolvedor Web</JobTitle>

		<About>
			Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
			Velit officia consequat duis enim velit mollit. Exercitation veniam
			consequat sunt nostrud amet.
		</About>

		<GithubButton>Visualizar Github</GithubButton>

		<Title>Contato</Title>
		<EmailButton>contato@johncovv.com</EmailButton>
	</Content>
);

export default Dashboard;
