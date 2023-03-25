import React from "react";
import styled from "styled-components";
import DefaultTemplate from "../templates/DefaultTemplate";
import Card from "../molecules/Card";

const GroupCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const mockProjects = [
  {
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
];

const ProjectsPage = () => {
  const groupProjectCard = mockProjects.map((project) => (
    <Card name={project.name} description={project.description} createdAt={project.createdAt} />
  ));
  return (
    <DefaultTemplate>
      <GroupCard>{groupProjectCard}</GroupCard>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
