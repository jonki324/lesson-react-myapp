import React, { Fragment } from "react";
import Item from "./Item/Item";

const List = () => {
  const todos = [
    { id: 1, todo: "todo1", isDone: false },
    { id: 2, todo: "todo2", isDone: false },
    { id: 3, todo: "todo3", isDone: false },
  ];
  return (
    <Fragment>
      <h2>Todo List</h2>
      {todos.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </Fragment>
  );
};

export default List;
