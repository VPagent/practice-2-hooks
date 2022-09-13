import ListGroup from 'react-bootstrap/ListGroup';

export function DefaultList({array, handleShow}) {
  return (
    <ListGroup>
      {array.map(({ name, gender }) => (
        <ListGroup.Item key={name.trim()} onClick={()=>handleShow(name)}>
          <p>{name}</p>
          <p>{gender}</p>
      </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

// name, gender, birth_year, hair_color и skin_color