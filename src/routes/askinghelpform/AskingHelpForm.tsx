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
    { value: "", label: "" },
    { value: "Javascript", label: "Javascript" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "HTML", label: "HTML" },
  ];

  const DeleteSkill = (title: string) => {
    setSkills(
      skills.filter((filteredSkill: string) => {
        return filteredSkill !== title;
      })
    );
  };

  return (
    <div>
      <h3>
        Ici vous pouvez remplir une demande d&apos;aide sur un sujet spécifique
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // eslint-disable-next-line no-console
          console.log("data", e);
        }}
      >
        <div>
          <label htmlFor="title">
            Titre de la demande :
            <input
              type="text"
              name="title"
              value={titleHelp}
              onChange={(e) => setTitleHelp(e.target.value)}
            />
          </label>
          <p>Technologie(s) concernée(s) :</p>
          <Select
            options={options}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(result: any) => {
              if (result) {
                setSkill(result.value);
              }
            }}
          />
          <div>
            {skills.map((oneSkill) => (
              <Skill
                title={oneSkill}
                onDelete={(title: string) => DeleteSkill(title)}
                key={id + ((Math.random() * 10) / Math.random()) * 15}
              />
            ))}
          </div>
          <button
            type="button"
            disabled={skills.includes(skill)}
            onClick={() => {
              setSkills([...skills, skill]);
            }}
          >
            +
          </button>
        </div>
        <div>
          <p>Contexte et descritpion du probleme (wysiwyg):</p>
          <Wysiwyg userInput={userInput} setUserInput={setUserInput} />
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default AskingHelpForm;
