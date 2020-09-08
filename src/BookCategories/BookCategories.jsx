import React, { useEffect, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import CategoryCard from '../CategoryCard/CategoryCard';
import './BookCategories.css';
import Books from '../Books/container';

const BookCategories = ({fetchBookCategories, booksData}) => {
    const loadMoreCategories = (option) => {
        fetchBookCategories(option);
    }
    useEffect(() => {
        fetchBookCategories();
    }, []);
    return(
        <Fragment>
            <div className="wrapper">
                <Button disabled={!booksData.allBooks || booksData.loading} onClick={() => loadMoreCategories('left')} variant="secondary">Left</Button>
                <div className="categories">
                    {booksData.allBooks && booksData.allBooks.map(category => (<CategoryCard key={category.id} {...category} />))}
                    {booksData.loading && <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}
                </div>
                <Button disabled={!booksData.allBooks || booksData.loading} onClick={() => loadMoreCategories('right')} variant="secondary">Right</Button>
            </div>
            <Books />
            <Button href="/books" variant="outline-primary">View all</Button>
        </Fragment>
    );
};

export default BookCategories;