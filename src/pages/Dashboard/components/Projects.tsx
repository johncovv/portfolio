import React from 'react';

import { useHistory } from 'react-router-dom';

import { BiLink } from 'react-icons/bi';
import { IoDocumentText } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';

import ProjectsData from '../../../assets/objects/projects';

import {
	ButtonContainer,
	ButtonLink,
	ButtonProject,
	Content,
	Description,
	Icon,
	Project,
	Title,
} from '../styles/projects';

const Projects: React.FunctionComponent = () => {
	const { push } = useHistory();

	const navigateTo = (url?: string): void => {
		if (!url) return;

		push(url);
	};

	return (
		<Content>
			{ProjectsData.map(({ name, icon, url, detailsUrl, github, description }) => (
				<Project key={name}>
					<Title>
						{icon && !!icon.source && <Icon src={icon.source} alt={icon.alt || 'johncovv project icon'} />} {name}
					</Title>
					<Description linkTarget="_blank">{description}</Description>

					<ButtonContainer>
						{!detailsUrl && url && (
							<ButtonLink onClick={() => window.open(url, '_blank')}>
								<BiLink size={22} color="#282929" />
								Visualizar
							</ButtonLink>
						)}

						{detailsUrl && (
							<ButtonLink onClick={() => navigateTo(detailsUrl)}>
								<IoDocumentText size={22} color="#282929" />
								Detalhes
							</ButtonLink>
						)}

						{github && github.length > 0 && (
							<ButtonProject onClick={() => window.open(github, '_blank')}>
								<IoLogoGithub size={22} color="#282929" />
								Abrir Projeto
							</ButtonProject>
						)}
					</ButtonContainer>
				</Project>
			))}
		</Content>
	);
};

export default Projects;
