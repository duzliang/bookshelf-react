const api = {
  user: {
    login() { return '/api/user/login'; },
    register() { return '/api/user/register'; },
    list() { return '/api/users'; },
    detail(id) { return `/api/user?id=${id}`; },
    add() { return '/api/user/add'; },
    edit() { return '/api/user/edit'; },
    delete(id) { return `/api/user/delete?id=${id}`; },
  },

  book: {
    list() { return '/api/books'; },
    detail(id) { return `/api/book?id=${id}`; },
    add() { return '/api/book/add'; },
    edit() { return '/api/book/edit'; },
    delete(id) { return `/api/book/delete?id=${id}`; },
  },

};

export default api;
