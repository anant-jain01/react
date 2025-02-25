const Pizza=(pops)=>{
    return React.createElement("div",{},
        [React.createElement("h1",{},pops.name),
            React.createElement("p",{},pops.description),
        ]
    );
};