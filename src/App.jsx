import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
const App = () => {
  <div>
    <h1>Padre Gino's Pizza – Order Now</h1>
    <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
    <Pizza
      name="The Hawaiian Pizza"
      description="Sliced Ham, Pineapple, Mozzarella Cheese"
    />
    <Pizza
      name="The Big Meat Pizza"
      description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
    />
  </div>;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(React.createElement(App));
