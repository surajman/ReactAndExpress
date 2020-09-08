import { connect } from 'react-redux';
import BookCategories from './BookCategories';
import {
    fetchBookCategories,
    fetchBookCategoriesSuccess,
    fetchBookCategoriesError,
    searchBooks,
} from '../redux/actions';
import {
    fetchBooks
} from '../redux/actions/books';

const mapStateToProps = state => {
    const {bookList: booksData, books} = state;
    return { booksData, books };
}

const mapDispatchToProps = {
    fetchBookCategories,
    fetchBookCategoriesSuccess,
    fetchBookCategoriesError,
    searchBooks,
    fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCategories);