

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [React.createElement("h1", {},
    "I am heading1"),
  React.createElement("h1", {}, "I am heading2")]), React.createElement("div",
    { id: "chiled2" },
    [React.createElement("h1", {}, "I am heading3"),
    React.createElement("h1", {}, "I am heading4")]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);