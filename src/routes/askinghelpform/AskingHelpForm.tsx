import React, { useState } from "react";
import Select from "react-select";
import { useForm, SubmitHandler } from "react-hook-form";
import Wysiwyg from "./Wysiwyg";
import Skill from "../../models/Skill";

type FormValues = {
  title: string;
  skills: string;
  wysiwyg: string;
};

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

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">
            Titre de la demande :
            <input
              {...register("title")}
              type="text"
              name="title"
              value={titleHelp}
              onChange={(e) => setTitleHelp(e.target.value)}
            />
          </label>
          <p>Technologie(s) concernée(s) :</p>
          <Select
            options={options}
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
