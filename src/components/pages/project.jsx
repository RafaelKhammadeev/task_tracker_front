import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";
import CardProject from "../molecules/CardProject";
import { useProject } from "../../lib/hooks/states/project";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { project, loading } = useProject({ projectId });
  const navigate = useNavigate();
  console.log(project, loading);

  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      <CardProject
        key={`card-${v4()}`}
        id={project.id}
        name={project.name}
        description={project.description}
        createdAt={project.createdAt}
      />
    </DefaultTemplate>
  );
};

export default ProjectPage;
