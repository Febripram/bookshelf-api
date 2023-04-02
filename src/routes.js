/* eslint-disable linebreak-style */
const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{booksId}',
    handler: getBookByIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{booksId}',
    handler: editBookByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{booksId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
