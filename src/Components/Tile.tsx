
type TileProps = {
    idx: number;
    value: string | null;
    handleClick: (idx: number) => void
}

const Tile = ({ idx, value, handleClick }: TileProps) => {
    return (
        
            <button onClick={(e) => {
                handleClick(idx)
            }} style={
                {flexBasis: 96, height: '90px'}
                }>
            { value }
            </button>
            
        
        
        
    )
}

export default Tile;