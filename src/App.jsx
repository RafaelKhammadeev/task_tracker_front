import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./lib/apolloClient";
import HomePage from "./components/pages";
import ProjectsPage from "./components/pages/projects";
import TasksPage from "./components/pages/tasks";
import ProjectPage from "./components/pages/project";


const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId/tasks" element={<TasksPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
