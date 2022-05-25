import { useState } from "react"
import Board, { gameStateArr } from "./Board"

const calculateWinner = (board: gameStateArr[]) => {
    const winningPositions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6] ]

    for (let index = 0; index < winningPositions.length; index++) {
        const [a,b,c] = winningPositions[index];
        
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
        
    }

    return false;

}

const Game = () => {
    const [gameState, setGameState]  = useState(new Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(gameState);
    console.log(winner)
    const handleClick = (index: number) => {
        const gameStateCopy = [...gameState];
        if (gameStateCopy[index] || winner) return;
        const player = isXNext ? 'X' : 'O';       
        
        
        gameStateCopy[index] = player
        setGameState(gameStateCopy)
        setIsXNext(!isXNext);
        return;
    }

    return (
        <>
        <h6>{winner ? `Player ${isXNext ? 'O' : 'X'} is the winner!!!!` : 'Tic tac toe' }</h6>
        <Board handleTileClick={handleClick} gameState={gameState} />
        </>
    )

}

export default Game