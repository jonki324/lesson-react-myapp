import React from "react";

const Item = (props) => {
  const item = props.item;
  return (
    <div>
      <input type="checkbox" name="done" id="done" />
      <label htmlFor="done">{item.todo}</label>
    </div>
  );
};

export default Item;
