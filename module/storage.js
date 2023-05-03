export const getStoredBooks = () => {
    return JSON.parse(localStorage.getItem('books')) || [];
  }
  
  export const setStoredBooks = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  }
  