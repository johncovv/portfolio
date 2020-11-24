import React from 'react';

import SkillsData from '../../../assets/objects/skills';

import { Content, Skill } from '../styles/skills';

const Skills: React.FunctionComponent = () => {
	return (
		<Content>
			{SkillsData.map(({ name, color, topic, Icon }) => (
				<Skill
					key={name}
					color={color}
					onClick={() => window.open(topic, '_target')}
				>
					<Icon color={color} size={25} />
					{name}
				</Skill>
			))}
		</Content>
	);
};

export default Skills;
