import React from "react";
import styled from "styled-components";
import DefaultTemplate from "../templates/DefaultTemplate";
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

  const groupProjectCard = projects.map((project) => (
    <Card key={project.id} name={project.name} description={project.description} createdAt={project.createdAt} />
  ));
  return (
    <DefaultTemplate>
      <GroupCard>{groupProjectCard}</GroupCard>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
