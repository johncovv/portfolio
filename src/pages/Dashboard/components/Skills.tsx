import React from 'react';

import { BiLink } from 'react-icons/bi';

import SkillsData from '../../../assets/objects/skills';

import {
	Content,
	Skill,
	Container,
	Title,
	Description,
	Button,
} from '../styles/skills';

const Skills: React.FunctionComponent = () => {
	const handleClickSkill = (url: string, index: number): void => {
		if (index !== 0 && window.innerWidth >= 768) window.open(url, '_target');
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
							onClick={() => window.open(url, '_target')}
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
