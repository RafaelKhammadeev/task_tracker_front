import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";
import Card from "../molecules/Card";
import { useProjects } from "../../lib/hooks/states/projects";

const GroupCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const ProjectsPage = () => {
  const { projects } = useProjects();
  console.log(projects);

  const navigate = useNavigate();

  const groupProjectCard = projects.map((project) => (
    <Card
      key={`card-${v4()}`}
      id={project.id}
      name={project.name}
      description={project.description}
      createdAt={project.createdAt}
    />
  ));
  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      <GroupCard>{groupProjectCard}</GroupCard>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
