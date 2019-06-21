const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const port = process.env.PORT || 3333;

const app = express();
app.use(express.json()); //permite que a nossa aplicação envie arquivos no formato JSON
app.use(cors());

// Conectando com o banco de dados mongodb
mongoose.connect('mongodb+srv://admin:mongodb123456@cluster0-whyx0.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true, useFindAndModify: false,
});
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(port, () => {
  console.log('Server started on port', port);
})
