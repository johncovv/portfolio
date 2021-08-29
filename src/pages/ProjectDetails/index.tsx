import React, { useEffect, useState } from 'react';

import { IoIosAlert, IoLogoGithub } from 'react-icons/io';
import { useHistory, useParams } from 'react-router-dom';

import { BiLink } from 'react-icons/bi';
import { CgFigma } from 'react-icons/cg';
import { DiPhotoshop } from 'react-icons/di';
import { SiAdobexd } from 'react-icons/si';

// components
import ProjectGallery from './components/gallery';

// objects
import ProjectsObj, { Project } from '../../assets/objects/projects';

// styles
import {
	About,
	Alert,
	Button,
	ButtonContainer,
	Content,
	Partner,
	PartnerJob,
	PartnerName,
	PartnersGroup,
	PartnersGroupTitle,
	ProjectIcon,
	Technologie,
	TechnologiesGroup,
	TechnologiesTitle,
	Title,
	TitleContainer,
} from './styles';

const ProjectDetails: React.FunctionComponent = () => {
	const { projectName } = useParams() as { projectName: string };
	const { push } = useHistory();

	const [project, setProject] = useState<Project | null>(null);

	useEffect(() => {
		const exist = ProjectsObj.find(
			(pjt) =>
				pjt.name.toLowerCase() === projectName.toLowerCase() || pjt.alias?.toLowerCase() === projectName.toLowerCase(),
		);

		if (!exist) {
			push('/');
		} else {
			setProject(exist);
		}
	}, [projectName, push]);

	if (!project) return null;

	return (
		<Content>
			{project.alert && (
				<Alert type={project.alert.type}>
					<IoIosAlert size={22} /> {project.alert.message}
				</Alert>
			)}

			<TitleContainer>
				{project.icon && (
					<ProjectIcon>
						<img src={project.icon.source} alt={project.icon.source} />
					</ProjectIcon>
				)}

				<Title>{project.name}</Title>
			</TitleContainer>

			<ButtonContainer>
				{project.url && (
					<Button onClick={() => window.open(project.url, '_blank')}>
						<BiLink size={22} color="#282929" />
						Visualizar
					</Button>
				)}

				{project.github && (
					<Button onClick={() => window.open(project.github, '_blank')}>
						<IoLogoGithub size={22} color="#282929" />
						Abrir Projeto
					</Button>
				)}

				{project.uiDesign && (
					<Button onClick={() => window.open(project.uiDesign?.url, '_blank')}>
						{project.uiDesign?.type === 'Figma' && <CgFigma size={22} color="#282929" />}
						{project.uiDesign?.type === 'Adobe XD' && <SiAdobexd size={22} color="#282929" />}
						{project.uiDesign?.type === 'Photoshop' && <DiPhotoshop size={22} color="#282929" />}
						Abrir {project.uiDesign.type}
					</Button>
				)}
			</ButtonContainer>

			<About linkTarget="_blank">{project.description.replace(/\n/g, '<br/>').replace(/\s/g, ' ')}</About>

			{project.technologies && project.technologies.length > 0 && (
				<TechnologiesGroup>
					<TechnologiesTitle>Tecnologias usadas:</TechnologiesTitle>

					{project.technologies.map(({ name, url }) => (
						<Technologie key={name} href={url}>
							- {name}
						</Technologie>
					))}
				</TechnologiesGroup>
			)}

			{project.partners && project.partners.length > 0 && (
				<PartnersGroup>
					<PartnersGroupTitle>Parceiros no projeto:</PartnersGroupTitle>

					{project.partners.map(({ name, url, job }) => (
						<Partner key={name}>
							<PartnerName href={url}>{name}</PartnerName>

							<PartnerJob>- {job}</PartnerJob>
						</Partner>
					))}
				</PartnersGroup>
			)}

			{project.images && <ProjectGallery images={project.images} />}
		</Content>
	);
};

export default ProjectDetails;
