// app.js
import { Library } from './library.js';

const library = new Library();

const showSection = (sectionId) => {
  const sections = document.querySelectorAll('main section');

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
};

const datetimeElement = document.getElementById('datetime');
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
datetimeElement.innerHTML = ` ${formattedDate}`;

const handleLinkClick = (e) => {
  e.preventDefault();
  showSection(e.target.dataset.section);
};

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

showSection('home');
library.books();
