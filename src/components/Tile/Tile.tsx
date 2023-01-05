import './Tile.css';

interface Props {
    number: number;
    image?: string;
}
export default function Tile({ number, image }: Props) {
    if (number % 2 === 0) {
        return (
            <div className='tile black-tile'>
                {image !== null && <div className="chess-piece" style={{ backgroundImage: `url(${image})` }}></div>}
            </div>
        );
    } else {
        return <div className='tile white-tile'>
            {image !== null && <div className="chess-piece" style={{ backgroundImage: `url(${image})` }}></div>}
        </div>
    }
}