const initialState = {
  booksEntity: {},
  bookIds: [],
  loading: false,
  currentBookId: "",
};

const saveOnlyUniqueBooks = (prevBooks, nextBooks) =>
  nextBooks.filter((book) => !Object.values(prevBooks).includes(book.id));

const getBookIds = (books) => Object.values(books).map((book) => book.id);

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_BOOK_ID": {
      return { ...state, currentBookId: action.payload };
    }
    case "BOOKS_FETCH_REQUESTED": {
      return { ...state, loading: true };
    }
    case "BOOKS_FETCHED": {
      if (state === initialState) {
        return {
          ...state,
          booksEntity: action.payload,
          bookIds: getBookIds(action.payload),
          loading: false,
        };
      }
      return {
        ...state,
        booksEntity: [
          ...Object.values(state.booksEntity),
          ...saveOnlyUniqueBooks(getBookIds(state.booksEntity), action.payload),
        ],
        bookIds: getBookIds(action.payload),
        loading: false,
      };
    }
    default:
      return state;
  }
}
