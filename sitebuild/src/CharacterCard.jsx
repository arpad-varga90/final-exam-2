import "./CharacterCard.css";

function CharacterCard({ name, status }) {
  function getStatusColor() {
    return status === "Alive" ? "green" : "red";
  }

  return (
    <div className="character-card">
      <div className="character-name">
        <h2>{name}</h2>
        <div className={`status-indicator ${getStatusColor()}`}></div>
      </div>
    </div>
  );
}

export default CharacterCard;
