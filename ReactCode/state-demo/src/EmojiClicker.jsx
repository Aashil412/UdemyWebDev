import { v4 as uuid } from "uuid";
import { useState } from "react";

function randomEmoji() {
    const choices = ["⭐", "😁", "👌", "🤣", "💕", "❤️",];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji()  }]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => prevEmojis.filter((e) => e.id !== id));
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
          <button onClick={addEmoji}>Add Emoji</button>
          <button onClick={makeEverythingAHeart}>Make them all hearts</button>
    </div>
  );
}
