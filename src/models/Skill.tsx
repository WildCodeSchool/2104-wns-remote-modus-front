import React from "react";

export interface SkillProps {
  title: string;
  _id?: string;
  onDelete: (title: string) => void;
}

function Skill({ title, onDelete }: SkillProps): JSX.Element {
  return (
    <div className="flex items-center mt-4 mr-4">
      <div className="mr-4 border-solid border-2 rounded-full p-0.5 border-yellow-500">
        {title}
      </div>
      <button
        className="m-0 border-2 rounded-full h-5 w-5 flex items-center justify-center"
        onClick={() => onDelete(title)}
        type="button"
      >
        x
      </button>
    </div>
  );
}

export default Skill;
