const express = require('express');
const app = express();
//const port = 3000; // You can choose any port you like

app.use(express.json()); // To parse JSON bodies

app.post('/', (req, res) => {
  const acceptHeader = req.headers['accept'];
    res.setHeader('accept', acceptHeader);

    const responseBody = {
      acceptheader: acceptHeader, 
      ...req.body
    }
    res.json(responseBody)
    });

    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.log('Server is running on port ${port}');
    })

  module.exports = server;

