import React from 'react';

import { BiLink } from 'react-icons/bi';

import SkillsData from '../../../assets/objects/skills';

import {
	Button,
	Container,
	Content,
	Description,
	Skill,
	Title,
} from '../styles/skills';

const Skills: React.FunctionComponent = () => {
	const handleClickSkill = (url: string, index: number): void => {
		if (index !== 0 && window.innerWidth >= 768) window.open(url, '_blank');
	};

	return (
		<Content>
			{SkillsData.map(({ name, color, url, Icon, description }, index) => (
				<Skill
					key={name}
					color={color}
					onClick={() => handleClickSkill(url, index)}
				>
					<Container>
						<Title>
							<Icon color={color} size={25} />
							{name}
						</Title>
						<Description>{description}</Description>

						<Button
							type="button"
							isFirst={!!(index === 0)}
							onClick={() => window.open(url, '_blank')}
						>
							<BiLink size={22} color="#282929" />
							Saiba mais
						</Button>
					</Container>
				</Skill>
			))}
		</Content>
	);
};

export default Skills;
