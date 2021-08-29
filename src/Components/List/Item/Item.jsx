import React from "react";

const Item = (props) => {
  const item = props.item;
  return (
    <div>
      <input type="checkbox" name="done" id="done" />
      {item.todo}
    </div>
  );
};

export default Item;
