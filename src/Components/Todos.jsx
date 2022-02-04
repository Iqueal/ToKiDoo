import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (props.todos.length === 0 ?
    <h2 className="text-success my-2 mx-4 font-xl text-center">No Todos found</h2> :
    <>
      <h2 className="text-success my-2 mx-4 font-xl text-center">Todos List</h2>
      <div className="text-center" style={ { width: "90vw", margin: "20px 5vw 20px 5vw" } } >
        { props.todos.map((todo, i) => (
          <Todo todo={ todo } sno={ i + 1 } onDelete={ props.onDelete } key={ i } />
        )) }
      </div>
    </>
  );
};

export default Todos;

