import React from 'react';

import { useHistory } from 'react-router-dom';

import { BiLink } from 'react-icons/bi';
import { IoLogoGithub } from 'react-icons/io';
import { IoDocumentText } from 'react-icons/io5';

import ProjectsData from '../../../assets/objects/projects';

import {
	Content,
	Project,
	Title,
	Description,
	ButtonContainer,
	ButtonLink,
	ButtonProject,
} from '../styles/projects';

const Projects: React.FunctionComponent = () => {
	const { push } = useHistory();

	return (
		<Content>
			{ProjectsData.map(({ name, url, detailsUrl, github, description }) => (
				<Project key={name}>
					<Title>{name}</Title>
					<Description>{description}</Description>

					<ButtonContainer>
						{!detailsUrl && url && (
							<ButtonLink onClick={() => window.open(url, '_blank')}>
								<BiLink size={22} color="#282929" />
								Visualizar
							</ButtonLink>
						)}

						{detailsUrl && (
							<ButtonLink onClick={() => push(detailsUrl)}>
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
