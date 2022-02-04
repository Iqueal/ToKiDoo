import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

  const [todos, setTodos] = useState(initTodos);

  const onDelete = (Todo) => {
    let updatedTodos = todos.filter((e) => e !== Todo)
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const addTodo = (title, desc) => {
    let todo = { title: title, desc: desc }
    let updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <Router>
      <Header title="ToKiDoo" />
      <Routes>
        <Route exact path="/" element={ <>
          <AddTodo addTodo={ addTodo } />
          <Todos todos={ todos } onDelete={ onDelete } />
        </> }>
        </Route>
        <Route path="/about" exact element={ <About /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
