const parent = React.createElement(
    "div",{id: "parent"}, React.createElement(
        "div", {id: "child"}, [
            React.createElement("h1", {id: "heading1"}, "I'm h1 Tag"),
            React.createElement("h2", {id:"heading2"}, "I'm h2 Tag")
        ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("rootId"));

root.render(parent);