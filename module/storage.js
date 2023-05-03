export function getStoredBooks() {
  return JSON.parse(localStorage.getItem('books')) || [];
}

export function setStoredBooks(books) {
  localStorage.setItem('books', JSON.stringify(books));
}
