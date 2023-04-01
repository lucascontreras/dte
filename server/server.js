require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3001; //FIXME!! (SOLVED) -- environment variable defined in .env file, if not defined it will default to 3000 // SOLUTION --> .env file wasn't in the root folder...

// console.log('process.env:', process.env);

app.use(cors());
app.use(express.json());
//get all clients
app.get('/api/v1/clients', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM clients');
    res.status(200).json({
      status: 'success',
      results: rows.length, //good practice for apis
      data: {
        clients: rows
      }
    });
  }
  catch (err) {
    console.log(err); //improve error handling
  }
});

//get a client
app.get('/api/v1/clients/:id', async (req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM clients WHERE id = $1',
      values: [req.params.id]
    }
    const { rows } = await db.query(query);
    res.status(200).json({
      status: 'success',
      results: rows.length,
      data: {
        client: rows[0]
      }
    });
  }
  catch(err) {
    console.log(err); //improve error handling
  }
});

//create a client
app.post('/api/v1/clients', async (req, res) => {
  try {
    const query = {
      text: 'INSERT INTO clients (name, rut) VALUES ($1, $2) RETURNING *',
      values: [req.body.name, req.body.rut]
    }
    const { rows } = await db.query(query);
    res.status(201).json({ //201 status --> created
      status: 'success',
      data: {
        client: rows[0]
      }
    });
  }
  catch(err) {
    console.log(err); //improve error handling
  }
});

//update a client
app.put('/api/v1/clients/:id', async (req, res) => {
  try {
    const query = {
      text: 'UPDATE clients SET name = $1, rut = $2 WHERE id = $3 RETURNING *',
      values: [req.body.name, req.body.rut, req.params.id]
    }
    const { rows } = await db.query(query);
    res.status(200).json({
      status: 'success',
      data: {
        client: rows[0]
      }
    });
  }
  catch (err) {
    console.log(err);
  }
});

//delete client
app.delete('/api/v1/clients/:id', async (req, res) => {
  try {
    const query = {
      text: 'DELETE FROM clients WHERE id = $1',
      values: [req.params.id]
    }
    const results = await db.query(query)
    res.status(204).json({ //204 --> no content
      status: 'success'
    });
  }
  catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});