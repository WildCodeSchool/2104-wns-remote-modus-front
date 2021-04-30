import React, { useState } from "react";
import Select from "react-select";
import Wysiwyg from "./Wysiwyg";
import Skill from "../../models/Skill";

const AskingHelpForm: React.FC = () => {
  const [titleHelp, setTitleHelp] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const id = 0;

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Node", label: "Node" },
  ];

  const DeleteSkill = (title: string) => {
    setSkills(
      skills.filter((filteredSkill: string) => {
        return filteredSkill !== title;
      })
    );
  };

  const onSubmitLog = (e: any) => {
    e.preventDefault();
    const formData = { title: titleHelp, skills, wysiwyg: userInput };
    JSON.stringify(formData);
    console.log(`data`, formData);
  };

  return (
    <div className="flex flex-col items-center">
      <h3>
        Ici vous pouvez remplir une demande d&apos;aide sur un sujet spécifique
      </h3>
      <form
        className="border-solid border-yellow-500 border-4 w-3/5 p-8"
        onSubmit={(e) => onSubmitLog(e)}
      >
        <div>
          <label htmlFor="title">
            Titre de la demande :
            <input
              className="border-2 border-solid ml-4"
              type="text"
              name="title"
              value={titleHelp}
              placeholder="Titre..."
              onChange={(e) => setTitleHelp(e.target.value)}
              required
            />
          </label>
          <p className="text-center mb-4 mt-4">Technologie(s) concernée(s) :</p>
          <div className="flex justify-between">
            <div className="flex w-full items-center">
              <Select
                className="w-3/5"
                required
                options={options}
                onChange={(result: any) => {
                  if (result) {
                    setSkill(result.value);
                  }
                }}
              />
              <button
                className="ml-4 border-2 rounded-full h-8 w-8 flex items-center justify-center"
                type="button"
                disabled={skills.includes(skill)}
                onClick={() => {
                  setSkills([...skills, skill]);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex">
            {skills.map((oneSkill) => (
              <Skill
                title={oneSkill}
                onDelete={(title: string) => DeleteSkill(title)}
                key={id + ((Math.random() * 10) / Math.random()) * 15}
              />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <p className="mb-4 mt-4">
            Contexte et description du probleme (wysiwyg):
          </p>
          <Wysiwyg userInput={userInput} setUserInput={setUserInput} />
          <div className="flex justify-end mt-4">
            <button
              className="border-2 p-1 flex items-center justify-center"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AskingHelpForm;
