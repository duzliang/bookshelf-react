const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  next();
})

// mock data
let todoItems = [
  { id: 0, value: 'React', done: false, delete: false },
  { id: 1, value: 'Vue', done: false, delete: false },
  { id: 2, value: 'Angular', done: true, delete: false }
]

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/items', function (req, res) {
  res.send(todoItems);
});

app.post('/items', function (req, res) {
  console.log('add:', req.body)
  if (req.body.todoItem) {
    todoItems = [...todoItems, req.body.todoItem];
    res.send(todoItems);
  }
});

app.delete('/items', function (req, res) {
  console.log('id', req.body.id);
  if (req.body.id) {
    todoItems.forEach(item => {
      if (item.id === req.body.id) {
        item.delete = true;
      }
    })

    res.send(todoItems);
  }
})

app.listen(8000, function () {
  console.log('Server running at http://127.0.0.1:8000');
})
