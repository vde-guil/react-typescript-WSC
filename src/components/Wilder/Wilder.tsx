import React from 'react';
import Proptypes from 'prop-types';

import blank_profile from './blank-profile-picture-female.png';
import Skill, {ISkillProps} from '../Skill/Skill';

export interface IWilderProps  {
    _id?:string;
    name: string;
    skills?: ISkillProps[];
}

function Wilder({name, skills }: IWilderProps) : JSX.Element {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      {skills && (
        <ul className="skills">
          {skills.map((skill) => (
            <Skill key={skill._id}  _id={skill._id} votes={skill.votes} title={skill.title} />
          ))}
        </ul>
      )}
    </article>
  );
}

Wilder.defaultProps = {
    skills: [],
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  skills: Proptypes.arrayOf(Proptypes.object),
};

export default Wilder;
