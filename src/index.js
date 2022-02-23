import React from "react";
import ReactDom from "react-dom";
import Auth from "./components/Auth/Auth";
import { BasicTable } from "./table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Auth />} />
      <Route path="/next" exact element={<BasicTable />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
