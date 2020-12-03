import React from 'react';

import { BiLink } from 'react-icons/bi';
import { IoLogoGithub } from 'react-icons/io';

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
	return (
		<Content>
			{ProjectsData.map(({ name, url, github, description }) => (
				<Project key={name}>
					<Title>{name}</Title>
					<Description>{description}</Description>

					<ButtonContainer>
						<ButtonLink onClick={() => window.open(url, '_target')}>
							<BiLink size={22} color="#282929" />
							Visualizar
						</ButtonLink>

						{github.length > 0 && (
							<ButtonProject onClick={() => window.open(github, '_target')}>
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
