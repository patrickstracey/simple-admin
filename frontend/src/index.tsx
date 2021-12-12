import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import AdminTable from "./components/AdminTable";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="acls" element={<AdminTable tableData="acls" />} />
        <Route path="bills" element={<AdminTable tableData="bills" />} />
        <Route path="chambers" element={<AdminTable tableData="chambers" />} />
        <Route
          path="classrooms"
          element={<AdminTable tableData="classroom" />}
        />
        <Route
          path="discussions"
          element={<AdminTable tableData="discussions" />}
        />
        <Route path="flows" element={<AdminTable tableData="flows" />} />
        <Route path="parties" element={<AdminTable tableData="parties" />} />
        <Route path="presets" element={<AdminTable tableData="presets" />} />
        <Route path="users" element={<AdminTable tableData="users" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
