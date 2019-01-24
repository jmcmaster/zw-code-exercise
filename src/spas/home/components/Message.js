import React from "react";

const Message = ({ isPlaying, gamesPlayed }) => {
  if (!isPlaying && gamesPlayed > 0) {
    return (
      <div className="game__message">
        <h1>Winner!</h1>
      </div>
    );
  }

  return null;
};

export default Message;
