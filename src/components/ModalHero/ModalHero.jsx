import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalHero({ handleClose, show, hero }) {
  if (hero) {
    const { name, gender, birth_year, hair_color, skin_color } = hero;
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Gender: {gender}</p>
            <p>Birth year: {birth_year}</p>
            <p>Hair color: {hair_color}</p>
            <p>Skin color: {skin_color}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ERROR</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

// name, gender, birth_year, hair_color и skin_color)
