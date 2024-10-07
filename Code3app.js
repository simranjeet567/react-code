import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id: "heading1"}, "Hi, from React")
const root = ReactDOM.createRoot(document.getElementById("rootId"));
root.render(heading);