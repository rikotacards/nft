import React from "react";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CollectionPage } from "./pages/CollectionPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { AppBar, CssBaseline } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AppBar position="fixed">
          <CssBaseline />
          <Toolbar>FTX NFT</Toolbar>
        </AppBar>
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
