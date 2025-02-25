const App=()=>{
    return React.createElement(
        "div",{},React.createElement("h1",{},["Padre Gino's Pizzeria"],
            React.createElement(Pizza,{
                name:"margherita",
                description:"Cheese lot's of it",
            }),
            React.createElement(Pizza,{
                name: "The Hawaiian Pizza",
                description: "Sliced Ham, Pineapple, Mozzarella Cheese",
            }),
            React.createElement(Pizza,{
                name: "The Big Meat Pizza",
                description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
}),
        ))
};
const Pizza=(pops)=>{
    return React.createElement("div",{},[React.createElement("h1",{},pops.name),
    React.createElement("p",{},pops.description)])
}
const container=document.querySelector("#root");
const  root=ReactDOM.createRoot(container);
root.render(React.createElement(App));