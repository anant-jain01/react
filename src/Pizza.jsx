const Pizza= (props)=>{
  return (
    <div classname="pizza">
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    </div>
  );
};
export default Pizza;