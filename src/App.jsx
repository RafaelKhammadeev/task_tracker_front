import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages";
import ProjectsPage from "./components/pages/projects";
import TasksPage from "./components/pages/tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
