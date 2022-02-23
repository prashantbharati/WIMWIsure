import React from "react";
import ReactDom from "react-dom";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Auth />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
