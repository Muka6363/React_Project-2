import "./Card.css";

const Card = (props) => {
  const { key, img, title, parag } = props;
  return (
    <div id={key} className="card">
      <div className="card-link">
        <h4>{title}</h4>
      </div>
      <img src={img} className="img" alt="..." />
      <div className="card-text">
        <p> {parag} </p>
      </div>
    </div>
  );
};

export default Card;
