import React from "react";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CollectionPage } from "./pages/CollectionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {  CssBaseline } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { TopAppBar } from "./components/TopAppBar/TopAppBar";
export const App = () => {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <TopAppBar/>
       <CssBaseline/>
       <Toolbar />
      </React.Fragment>
        <Routes pa>
          <Route path="/" element={<CollectionsPage />} />
          <Route
            path="/collection/:collectionName"
            element={<CollectionPage />}
          ></Route>
        </Routes>
    </BrowserRouter>
  );
};
