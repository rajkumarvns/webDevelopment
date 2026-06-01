function Card(props) {
  return (
    <div className="parent">
      <div className="card text-white rounded-3 border-3 border-danger">
        <img src={props.img} alt="image" />
        <h1>
          {props.user} My_Age {props.age}
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, amet!
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Card;
