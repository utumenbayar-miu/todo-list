import React from "react";
import TodoAdd from "./components/TodoAdd";
import TodoHome from "./components/TodoHome";
import TodoDetails from "./components/TodoDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/todo/add" element={<TodoAdd />} />
          <Route path="/todo/item/:id" element={<TodoDetails />} />
          <Route path="/todo/home" element={<TodoHome />} />
        </Routes>
      </Router>
    );
  }
}
