import React from "react";

export interface SkillProps {
  title: string;
  _id?: string;
  onDelete: (title: string) => void;
}

function Skill({ title, onDelete }: SkillProps): JSX.Element {
  return (
    <div>
      {title}
      <button onClick={() => onDelete(title)} type="button">
        -
      </button>
    </div>
  );
}

export default Skill;
