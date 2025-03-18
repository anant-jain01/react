const Pizza = (props) => {
  return (
    <div className="Pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Pizza;
