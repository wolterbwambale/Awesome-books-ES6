export const createBookElement = (book, removeBookCallback) => {
  const bookApp = document.createElement('div');
  bookApp.classList.add('book');
  bookApp.innerHTML = `
      <p>"${book.title}" by ${book.author}</p>
      <button class="remove-btn">Remove</button>
    `;
  const removeButton = bookApp.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => {
    removeBookCallback(book);
    bookApp.remove();
  });
  return bookApp;
};
