'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.post('/api/register', controller.user.register);
  router.post('/api/login', controller.user.login);

  // books
  router.get('/api/book/list', controller.book.list);
  router.get('/api/book/detail', controller.book.detail);
  router.post('/api/book/add', controller.book.add);
  router.patch('/api/book/edit', controller.book.edit);
  router.delete('/api/book/delete', controller.book.delete);
};
