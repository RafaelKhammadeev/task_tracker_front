import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";

const TasksPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  console.log(projectId);

  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      My post {projectId}
    </DefaultTemplate>
  );
};

export default TasksPage;
