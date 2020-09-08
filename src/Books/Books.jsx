import React, { useEffect, Fragment, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import BookModal from '../BookModal/BookModal';
import './Books.css';

const Books = ({fetchBooks, books, createBook, updateBook}) => {

    const [text, setText] = useState('');
    const [isAddNew, setAddNew] = useState(false);
    const [show, setShow] = useState(false);
    const [bookDetail, setBookDetail] = useState({});

    const handleSubmit = (e) => {
        if(e.keyCode === 13) {
            fetchBooks(text);
        }
    }
    const handleClose = (isSaved) => {
        setShow(false);
        setBookDetail({});
    }
    const saveChanges = (addNew, bookDetails) => {
        if (addNew) {
            createBook(bookDetails);
        } else {
            updateBook(bookDetails)
        }
        handleClose()
    }
    const editBookDetails = (book) => {
        setShow(true);
        setAddNew(false);
        setBookDetail(book);
    }
    useEffect(() => {
        fetchBooks();
    }, []);

    return(
        <Fragment>
            {show && <BookModal isAddNew={isAddNew} bookDetails={bookDetail} handleClose={handleClose} show={show} saveChanges={saveChanges} />}
            <div>
                Books Are here
            </div>
            <div className="buttonInputWrapper">
                <InputGroup value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleSubmit} className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={() => {setShow(true);setAddNew(true)}}> + Add New Books</Button>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Search your books here"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <InputGroup.Append>
                        <Button onClick={() => fetchBooks(text)}> Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            {books.loading &&
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
            {!!(books.data) && !!(books.data.length) &&
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr className="tableHeadRow">
                            <th>Name</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Edition</th>
                            <th>Copies</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.data.map(book => (
                            <tr key={book.id} className="tableRow">
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                                <td>{book.edition}</td>
                                <td>{book.copies}</td>
                                <td>
                                    <Button variant="outline-primary" onClick={() => editBookDetails(book)}>Edit</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </Fragment>
    );
};

export default Books;