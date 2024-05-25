const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'works'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных MySQL успешно установлено');
});

app.get('/works', (req, res) => {
  connection.query('SELECT * FROM works', (error, results, fields) => {
    if (error) {
      console.error('Ошибка выполнения запроса:', error);
      res.status(500).json({ error: 'Ошибка выполнения запроса' });
      return;
    }
    res.json(results);
  });
});

app.post('/works', (req, res) => {
  const { category, title, price, img, url } = req.body;
  connection.query('INSERT INTO works (category, title, price, img, url) VALUES (?, ?, ?, ?, ?)', 
    [category, title, price, img, url], 
    (error, results, fields) => {
      if (error) {
        console.error('Ошибка выполнения запроса:', error);
        res.status(500).json({ error: 'Ошибка выполнения запроса' });
        return;
      }
      res.json({ message: 'Работа успешно добавлена', id: results.insertId });
    });
});

app.put('/works/:id', (req, res) => {
  const { category, title, price, img, url } = req.body;
  const id = req.params.id;
  connection.query('UPDATE works SET category = ?, title = ?, price = ?, img = ?, url = ? WHERE id = ?', 
    [category, title, price, img, url, id], 
    (error, results, fields) => {
      if (error) {
        console.error('Ошибка выполнения запроса:', error);
        res.status(500).json({ error: 'Ошибка выполнения запроса' });
        return;
      }
      res.json({ message: 'Работа успешно обновлена' });
    });
});

app.delete('/works/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM works WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error('Ошибка выполнения запроса:', error);
      res.status(500).json({ error: 'Ошибка выполнения запроса' });
      return;
    }
    res.json({ message: 'Работа успешно удалена' });
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
