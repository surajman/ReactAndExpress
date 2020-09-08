import { connect } from 'react-redux';
import Books from './Books';
import {
    fetchBooks,
    createBook,
    updateBook,
} from '../redux/actions/books';

const mapStateToProps = state => {
    const {bookList: booksData, books} = state;
    return { booksData, books };
}

const mapDispatchToProps = {
    fetchBooks,
    createBook,
    updateBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);