import React, { useMemo, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BookModal.css'

const BookModal = ({isAddNew, bookDetails={}, handleClose, show, saveChanges}) => {

    const [name, setName] = useState(bookDetails.name);
    const [author, setAuthor] = useState(bookDetails.author);
    const [category, setCategory] = useState(bookDetails.category);
    const [edition, setEdition] = useState(bookDetails.edition);
    const [copies, setCopies] = useState(bookDetails.copies);

    const modalHeading = isAddNew ? 'Add New Book' : 'Edit Book Details';

    const isButtonDisabled = useMemo(() => {
        return !(name && author && category && edition && copies);
    },[name, author, category, edition, copies]);

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="labelInputWrapper">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" name="bookName" id="bookName" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="authorName">Author</label>
                    <input type="text" name="authorName" id="authorName" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="edition">Edition</label>
                    <input type="text" name="edition" id="edition" value={edition} onChange={(e) => setEdition(e.target.value)}/>
                </div>
                <div className="labelInputWrapper">
                    <label htmlFor="copies">Copies Left</label>
                    <input type="text" name="copies" id="copies" value={copies} onChange={(e) => setCopies(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button disabled={isButtonDisabled} variant="primary" onClick={() => saveChanges(isAddNew, {name, copies, author, category, edition, id: bookDetails.id})}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BookModal;
