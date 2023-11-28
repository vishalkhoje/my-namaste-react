const header = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "childone" }, "Hello world from React app!"),
  React.createElement("h2", { id: "heading" }, "Hello world from React app!"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
