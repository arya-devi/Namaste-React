/*
<div id="parent">
<div id="child">
<h1>Hello world from React h1</h1>
<h2>Hello world from React h2</h2>

</div>

</div>

React.createElement (object) => HTML(browser understand)

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world from React h1"),
    React.createElement("h2", {}, "Hello world from React h2"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React !"
// );
console.log(parent); //this is an object not html tag yet !

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // The render method take the react element that is a javascript object and it convert that into browser understands tags(HTML)
