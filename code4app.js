const parent = React.createElement(
    "div",{id: "parent"}, React.createElement(
        "div", {id: "child"}, React.createElement(
            "h1", {}, "I'm h1 Tag"
        )
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("rootId"));

root.render(parent);