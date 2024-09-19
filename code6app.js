const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
            React.createElement("h1", {id: "heading1"}, "I'm h1 tag"),
            React.createElement("h2", {id:"heading2"}, "I'm h2 tag")
        ]),
    React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {id: "head1"}, "I'm h1 Tag"),
            React.createElement("h2", {id:"head2"}, "I'm h2 Tag")
        ])
]);

const root = ReactDOM.createRoot(document.getElementById("rootId"));

root.render(parent);