const API = {
  user: {
    login() { return '/api/login'; },
    register() { return '/api/register'; },
  },

  book: {
    list() { return '/api/book/list';},
    detail(id) { return `/api/book/detail?id=${id}`;},
    add() { return '/api/book/add';},
    edit() { return '/api/book/edit';},
    delete(id) { return `/api/book/delete?id=${id}`;},
  },
};

export default API;
