import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import { MainLayout } from "../../layouts/main/qweqwew";
import { MainLayout } from "../../layouts/main/MainLayout";

export const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};
