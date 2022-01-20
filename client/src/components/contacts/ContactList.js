import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
    return(
        <>
        <ListGroup>
            { contacts.map( c =>
                <Link to={`/contacts/${c.id}`}>
                    <ListGroup.Item>{c.name}</ListGroup.Item>
                </Link>
            )}
        </ListGroup>
     </>
    )
}

export default ContactList;