import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";
import { useProject } from "../../lib/hooks/states/project";
import Card from "../molecules/CardProject";
import CardTask from "../molecules/CardTask";

const GroupCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const TasksPage = () => {
  const { projectId } = useParams();
  const { project, loading } = useProject({ projectId });
  const navigate = useNavigate();
  const groupTaskCard = project?.tasks?.map((task) => (
    <CardTask
      key={`card-${v4()}`}
      id={task.id}
      title={task.title}
      description={task.description}
      state={task.state}
      deadlineAt={task.deadlineAt}
    />
  ));

  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      {!loading && <GroupCard>{groupTaskCard}</GroupCard>}
    </DefaultTemplate>
  );
};

export default TasksPage;
