import Pizza from "./Pizza";
import {useState} from'react';
export default function Order() {
  // const pizzaType = "pepperoni";
  // const pizzaSize = "medium";
  const [pizzaType,setPizzaType]=useState("pepperoni");
  const [pizzaSize,setPizzaSize]=useState("M");
  console.log(pizzaType,pizzaSize);
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select 
            
            onChange={(e)=> setPizzaType(e.target.value)}
            
            name="pizza-type" value={pizzaType}>
              <option value="pepperoni">Pepperoni Pizza</option>
              <option value="hawaiian">Hawaiian Pizza</option>
              <option value="big_meat">Big Meat Pizza</option>
            </select>
          </div>
          <div
          onChange={(e)=>setPizzaSize(e.target.value)}>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-medium"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add To Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="another type of pizza"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$13.50</p>
        </div>
      </form>
    </div>
  );
}
