import React from 'react';

import ProjectsData from '../../../assets/objects/projects';

import { Content, Project, Thumbnail, Title } from '../styles/projects';

const Projects: React.FunctionComponent = () => {
	return (
		<Content>
			{ProjectsData.map(({ name, thumbnail, url }, index) => (
				<Project
					key={`${name}_${index}`}
					onClick={() => window.open(url, '_target')}
				>
					<Thumbnail src={thumbnail} alt={name} />
					<Title>{name}</Title>
				</Project>
			))}
		</Content>
	);
};

export default Projects;
