import React from "react";
import { Button } from "semantic-ui-react";
import "../css/skills.css";

export interface SkillProps {
  title: string;
  _id?: string;
  onDelete: (title: string) => void;
}

function Skill({ title, onDelete }: SkillProps): JSX.Element {
  return (
    <div className="skills">
      <div className="">{title}</div>
      <Button onClick={() => onDelete(title)} type="button" size="mini">
        x
      </Button>
    </div>
  );
}

export default Skill;
