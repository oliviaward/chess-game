import React from 'react';
import './board.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Board() {
    let chessBoard = [];
    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const tileNumber = i + j + 2;
            if (tileNumber % 2 == 0) {
                chessBoard.push(<div className="tile black-tile">[{horizontalAxis[j]}{verticalAxis[i]}]</div>);
            } else {
                chessBoard.push(<div className="tile white-tile">[{horizontalAxis[j]}{verticalAxis[i]}]</div>)
            }
        }
    }
    return <div id="board">{chessBoard}</div>;
}