import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./components/Pages/Dashboard";
import Products from "./components/Pages/Products";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/pakistan" element={<div>pakistan is the king</div>}/>
      </Routes>
    </>
  );
};

export default App;
