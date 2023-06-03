import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";
import { useProjects } from "../../lib/hooks/states/projects";
import CardProject from "../molecules/CardProject";
import { useCreateProject } from "../../lib/hooks/actions/createProject";

const GroupCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const ProjectsPage = () => {
  const { projects } = useProjects();
  const [createProject] = useCreateProject();

  const navigate = useNavigate();

  const groupProjectCard = projects.map((project) => (
    <CardProject
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
      <Button label="Create Project" onClick={() => createProject({ name: "test", description: "lol" })} />
      <GroupCard>{groupProjectCard}</GroupCard>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
