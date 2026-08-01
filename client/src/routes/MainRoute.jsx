import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home"));
const CreatePage = lazy(() => import("../pages/Create"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
