import { useState } from "react";
import "./App.css";

// eslint-disable-next-line react/prop-types
function SquareButton({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function App() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }
  return (
    <div className="board">
      <div className="board-row">
        <SquareButton value={squares[0]} onSquareClick={() => handleClick(0)} />
        <SquareButton value={squares[1]} onSquareClick={() => handleClick(1)} />
        <SquareButton value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <SquareButton value={squares[3]} onSquareClick={() => handleClick(3)} />
        <SquareButton value={squares[4]} onSquareClick={() => handleClick(4)} />
        <SquareButton value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <SquareButton value={squares[6]} onSquareClick={() => handleClick(6)} />
        <SquareButton value={squares[7]} onSquareClick={() => handleClick(7)} />
        <SquareButton value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
