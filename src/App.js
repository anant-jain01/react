const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "lorem ipsum",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "xyz",
    }),
    React.createElement(Pizza, { name: "Farmhouse", description: "abc" }),
    React.createElement(Pizza, {
      name: "Veggie Paradise",
      description: "qwerty",
    }),
    React.createElement(Pizza, {
      name: "Thin crust",
      description: "small crust usually pan.",
    }),
  ]);
};
const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
