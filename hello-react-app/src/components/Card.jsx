// src/components/Card.jsx
const Card = ({ image, title, description, category, link }) => {
  return (
    <div className="card">
      <span className="category">{category}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => window.open(link, "_blank")}>Learn More</button>
    </div>
  );
};
export default Card;
