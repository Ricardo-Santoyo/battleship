import Player from "./player";
import AI from "./computerAI";

const GameController = (() => {
  function startGame() {
    return (
      Player("Player1"),
      AI()
    )
  };

  return {
    startGame
  };
})();

export default GameController;