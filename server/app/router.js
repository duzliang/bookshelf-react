'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  console.log('router:', controller.user);

  router.get('/', controller.home.index);
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);
};
