import { observable } from "mobx";
import axios from "axios";

const HOST = 'http://localhost:8000';

export const store = observable({
  count: 0,
  todos: [],

  getTodos() {
    axios.get(`${HOST}/items`)
      .then((res) => {
        this.todos = res.data || [];
      });
  }
});


