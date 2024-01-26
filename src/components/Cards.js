import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Cards(props) {
    return (
        <>
            <div className={'cardView'}>
                {props.musics.map((music, index) => (
                    <Card key={index} style={{ width: '20%', backgroundColor: '#1C7293', marginBottom: '80px' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '80%', backgroundColor: '#1C7293' }} src={music.image} />
                        <Card.Body styles={{}}>
                            <Card.Title styles={{ textAlign: 'center' }}>{music.title}</Card.Title>
                            <Link to='/details' state={{ music: music }}><Button variant="primary">Strona utworu</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Cards;
