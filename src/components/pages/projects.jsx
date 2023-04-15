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

const mockProjects = [
  {
    id: 1,
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    id: 2,
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    id: 3,
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    id: 4,
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    id: 5,
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    id: 6,
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    id: 7,
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    id: 8,
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
];

const ProjectsPage = () => {
  const projects = useProjects();
  console.log(projects);

  const groupProjectCard = mockProjects.map((project) => (
    <Card key={project.id} name={project.name} description={project.description} createdAt={project.createdAt} />
  ));
  return (
    <DefaultTemplate>
      <GroupCard>{groupProjectCard}</GroupCard>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
