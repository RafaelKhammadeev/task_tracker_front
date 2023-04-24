import React from "react";
import apolloClient from "./lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages";
import ProjectsPage from "./components/pages/projects";
import TasksPage from "./components/pages/tasks";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId/tasks" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
