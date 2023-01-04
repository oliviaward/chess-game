import Tile from '../Tile/Tile';
import './board.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
    image: string;
    xCord: number;
    yCord: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
    const colour = p === 0 ? "black" : "white";
    const yCord = p === 0 ? 7 : 0;

    pieces.push({ image: `./assets/images/${colour}_rook.png`, xCord: 0, yCord })
    pieces.push({ image: `./assets/images/${colour}_rook.png`, xCord: 7, yCord })
    pieces.push({ image: `./assets/images/${colour}_knight.png`, xCord: 1, yCord })
    pieces.push({ image: `./assets/images/${colour}_knight.png`, xCord: 6, yCord })
    pieces.push({ image: `./assets/images/${colour}_bishop.png`, xCord: 2, yCord })
    pieces.push({ image: `./assets/images/${colour}_bishop.png`, xCord: 5, yCord })
    pieces.push({ image: `./assets/images/${colour}_queen.png`, xCord: 3, yCord })
    pieces.push({ image: `./assets/images/${colour}_king.png`, xCord: 4, yCord })
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: "./assets/images/black_piece.png", xCord: i, yCord: 6 })
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: "./assets/images/white_piece.png", xCord: i, yCord: 1 })
}

export default function Board() {
    let chessBoard = [];
    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const number = i + j + 2;
            let image = undefined;
            pieces.forEach((p) => {
                if (p.yCord === i && p.xCord === j) {
                    image = p.image;
                }
            })


            chessBoard.push(<Tile image={image} number={number} />);
        }
    }
    return <div id="board">{chessBoard}</div>;
}