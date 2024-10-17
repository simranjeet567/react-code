import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {id: "heading1"}, "hey!, how are you today?");
const root = ReactDOM.createRoot(document.getElementById("rootId"));
root.render(heading);
