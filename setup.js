const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ratuser',
  password: 'Baliqis123@',
  database: 'ratdb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});



CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  referralId VARCHAR(255) NOT NULL,
  referrals INT NOT NULL,
  telegram VARCHAR(255)
);


app.post('/submit', (req, res) => {
  const { address, referralId, referrals, telegram } = req.body;
  const sql = 'INSERT INTO users (address, referralId, referrals, telegram) VALUES (?, ?, ?, ?)';
  db.query(sql, [address, referralId, referrals, telegram], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Error inserting data into MySQL');
      return;
    }
    console.log('Data inserted into MySQL');
    res.status(200).send('Data inserted into MySQL');
  });
});

app.get('/getdata', (req, res) => {
  const { address } = req.query;

  const sql = 'SELECT * FROM users WHERE address = ?';

  db.query(sql, [address], (err, result) => {
      if (err) {
        console.error('Error in fetching data from MySQL', err);
        res.status(500).send('Error in fetching data from MySQL');
        return;
      }
      console.log('Data fetched successfully:', result);
      res.status(200).json(result);
  });
});


app.get('/getRef', (req, res) => {
  const { referralId } = req.query;

  const sql = 'SELECT * FROM users WHERE referralId = (?)'

  db.query(sql, [referralId], (err, result) => {
      if (err) {
        console.error('Error in featching data from MySQL', err);
        res.status(500).send('Error in featching data from MySQL');
        return;
      }
      console.log('Data fetched succesfully');
      res.status(200).send(result);
    });

});


app.post('/updateReferrals', (req, res) => {
  const { referralId, referrals } = req.body;

  const sql = 'UPDATE users SET referrals = ? WHERE referralId = ?';

  db.query(sql, [referrals, referralId], (err, result) => {
    if (err) {
      console.error('Error updating data in MySQL:', err);
      res.status(500).send('Error updating data in MySQL');
      return;
    }
    if (result.affectedRows === 0) {
      // Handle case where referralId was not found
      res.status(404).send('ReferralId not found');
      return;
    }
    console.log('Data updated in MySQL');
    res.status(200).send('Data updated in MySQL');
  });
});


app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
  });



  {
    "name": "ratproj",
    "version": "1.0.0",
    "description": "A brief description of your project",
    "repository": {
      "type": "git",
      "url": ""
    },
    "author": "rat",
    "license": "MIT",
    "dependencies": {
      
    }
  }

  Create database ratdb;

  CREATE USER 'ratuser'@'localhost' IDENTIFIED BY 'Baliqis123@';

  GRANT ALL PRIVILEGES ON ratdb.* TO 'ratuser'@'localhost';

  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Baliqis123@';
