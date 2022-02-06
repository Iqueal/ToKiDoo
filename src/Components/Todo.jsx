import React, { useState } from "react";
import { Button, Card, Badge } from "react-bootstrap";

const Todo = ({ todo, sno, onDelete }) => {
  const [done, setDone] = useState(false);
  let markDone = () => setDone(done ? false : true);


  return (
    <Card className=" my-2">
      <Card.Body>
        <Card.Title>
          { sno }. { done ?
            <>
              <strike>{ todo.title }</strike> <br />
              <Badge bg="info"> ✓ Task Completed</Badge>
            </>
            : todo.title }
        </Card.Title>
        <hr />
        <Card.Text> { todo.desc } </Card.Text>
        <div>
          <Button variant="danger" className="mx-2" onClick={ () => onDelete(todo) }>
            Delete
          </Button>
          <Button variant="success" className="mx-2" onClick={ markDone }>
            { done ? <>Mark Undone</> : <>Mark Done</> }
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Todo;
