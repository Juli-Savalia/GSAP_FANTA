import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fanta from "./Fanta";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fanta></Fanta>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
