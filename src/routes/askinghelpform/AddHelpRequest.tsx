import React, { useState } from "react";
import Select from "react-select";
import Skill from "../../models/Skill";

const options = [
  { value: "", label: "" },
  { value: "Javascript", label: "Javascript" },
  { value: "GraphQL", label: "GraphQL" },
  { value: "HTML", label: "HTML" },
];

function AddHelpRequest(): JSX.Element {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const id = 0;

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
          <p>Technologie(s) concernée(s) :</p>
          <Select
            options={options}
            onChange={(result) => {
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
          <input type="text-area" placeholder="ceci est un placeholder" />
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddHelpRequest;
