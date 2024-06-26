import "./App.css";
import CharacterCard from "./CharacterCard";

const characters = [
  { name: "Naruto Uzumaki", status: "Alive" },
  { name: "Sasuke Uchiha", status: "Alive" },
  { name: "Sakura Haruno", status: "Alive" },
  { name: "Kakashi Hatake", status: "Alive" },
  { name: "Obito Uchiha", status: "Deceased" },
  { name: "Madara Uchiha", status: "Deceased" },
  { name: "Hashirama Senju", status: "Deceased" },
  { name: "Tobirama Senju", status: "Deceased" },
  { name: "Hiruzen Sarutobi", status: "Deceased" },
  { name: "Minato Namikaze", status: "Deceased" },
];

const App = () => {
  return (
    <div className="app">
      <h1>Naruto Characters</h1>
      <div className="character-grid">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            name={character.name}
            status={character.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
