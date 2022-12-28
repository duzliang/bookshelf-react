import axios from "axios";
const HOST = 'http://localhost:8000';

export function fetchTodos() {
  axios.get(`${HOST}/items`).then(res => res);
}
