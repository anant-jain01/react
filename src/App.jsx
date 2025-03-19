import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza – Order Now</h1>
      <Pizza
        image={"/public/pizzas/pepperoni.webp"}
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
      />
      <Pizza
        image={"/public/pizzas/hawaiian.webp"}
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        image={"/public/pizzas/big_meat.webp"}
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
      />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
