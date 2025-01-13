import { useState } from "react";
export const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditing = () => {
    setIsEditing((pre) => {
      return !pre;
    });
  };
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
};
