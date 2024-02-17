const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React !"
);
console.log(heading); //this is an object not html tag yet !

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // The render method take the react element that is a javascript object and it convert that into browser understands tags(HTML)
