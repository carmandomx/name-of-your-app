import Tile from "./Tile"

export type gameStateArr = 'X' | 'O' | null;
type BoardProps = {
    gameState: gameStateArr[],
    handleTileClick: (idx: number) => void
}

const Board = ({ gameState, handleTileClick }: BoardProps ) => {
    // mapearInfo -> JSX
    
    const list = gameState.map((value, index) => {
        return (<Tile handleClick={handleTileClick} key={index} value={value} idx={index}/>)
    })

    return (
        <div style={{
            display: 'flex',
            width: '300px',
            height: '300px',
            flexWrap: 'wrap',
            
            justifyItems: 'start',
            
        }}>
            { list }
        </div>
    );
}

export default Board;