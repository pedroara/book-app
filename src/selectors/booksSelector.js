import { createSelector } from "reselect";

const getBooks = (state) => state.books.booksEntity;
const getFetchedBookIds = (state) => state.books.bookIds;
const getBookId = (_, id) => id;

export const getFetchedBooks = createSelector(
  getBooks,
  getFetchedBookIds,
  (books, ids) =>
    Object.values(books).filter((book) => Object.values(ids).includes(book.id))
);

export const getBookById = createSelector(
  getBooks,
  getBookId,
  (books, id) => Object.values(books).filter((book) => book.id === id)[0]
);
