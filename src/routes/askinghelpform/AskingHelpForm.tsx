import React, { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import Select from "react-select";
import Wysiwyg from "./Wysiwyg";
import Skill from "../../models/Skill";
import "../../css/askingHelpForm.css";

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
    <Container className="containerForm">
      <div>
        <h3>
          Ici vous pouvez remplir une demande d&apos;aide sur un sujet
          spécifique
        </h3>
        <Form onSubmit={(e) => onSubmitLog(e)}>
          <div>
            <Form.Input
              label="Titre de la demande :"
              type="text"
              name="title"
              value={titleHelp}
              placeholder="Titre..."
              onChange={(e) => setTitleHelp(e.target.value)}
              required
            />
            <p>Technologie(s) concernée(s) :</p>
            <div>
              <div className="technologySelect">
                <Select
                  className="selectTech"
                  required
                  options={options}
                  onChange={(result: any) => {
                    if (result) {
                      setSkill(result.value);
                    }
                  }}
                />
                <Button
                  size="mini"
                  color="violet"
                  type="button"
                  disabled={skills.includes(skill)}
                  onClick={() => {
                    setSkills([...skills, skill]);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              {skills.map((oneSkill) => (
                <Skill
                  title={oneSkill}
                  onDelete={(title: string) => DeleteSkill(title)}
                  key={id + ((Math.random() * 10) / Math.random()) * 15}
                />
              ))}
            </div>
          </div>
          <div>
            <p>Contexte et description du probleme (wysiwyg):</p>
            <Wysiwyg userInput={userInput} setUserInput={setUserInput} />
            <div className="button">
              <Button color="orange">Ajouter</Button>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AskingHelpForm;
