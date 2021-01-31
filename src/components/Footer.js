import {Card} from "react-bootstrap";
import './Footer.css';

const Footer = () => {

    return(
        <Card>
            <Card.Body>
                <Card.Title className={'text-center'}>@yagizKanbur</Card.Title>
            </Card.Body>
            <Card.Footer className={'copyrights'}>
                <small className={'text-muted'}>All Rights Reserved © 2021</small>
            </Card.Footer>
        </Card>
    );
}

export default Footer;