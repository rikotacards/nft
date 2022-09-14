import React from "react";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CollectionPage } from "./pages/CollectionPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes pa>
          <Route path="/" element={<CollectionsPage />}>

          </Route>
          <Route path="/collection/:collectionName" element={<CollectionPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
