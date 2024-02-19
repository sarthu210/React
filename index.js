

const heading = React.createElement("h1" , {id: "heading"} , "Hi This Is Done With React");

const divNew = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1" , {} , "I am child1 H1"),
        React.createElement("h2" , {} , "I am child1 H2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1" , {} , "I am child2 H1"),
        React.createElement("h2" , {} , "I am child2 H2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divNew);