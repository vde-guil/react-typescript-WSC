import React from "react";
import Proptypes from "prop-types";

import {Badge, Votes} from '../../elements/elements';

export interface ISkillProps  {
    _id?:string;
    votes: number;
    title: string;
}

function Skill({ votes, title }: ISkillProps): JSX.Element {
	return (
		<Badge>
			{title}
			<Votes votes={votes}>{votes}</Votes>
		</Badge>
	);
}

Skill.propTypes = {
	votes: Proptypes.number.isRequired,
	title: Proptypes.string.isRequired,
};

export default Skill;