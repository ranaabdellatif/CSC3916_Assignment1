const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies

app.post('/', (req, res) => {
    const acceptHeader = req.get['Accept'];

    if (acceptHeader){
    res.setHeader('accept', acceptHeader);
    }

    const responseBody = {
      ...req.body
    }

    res.json(responseBody)
    });

    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })

  module.exports = server;

