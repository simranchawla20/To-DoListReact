import React, { useState } from "react";

function Item(props) {
  var [decoration, setCross] = useState("");

  function cross() {
    setCross(() => {
      return decoration === "" ? "line-through" : "";
    });
  }

  return (
    <li style={{ textDecoration: decoration }} onClick={cross}>
      {props.data}
    </li>
  );
}

export default Item;
