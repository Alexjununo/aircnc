const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    path = require('path'),
    routes = require('./routes');

const app = express();

mongoose.connect(
    'mongodb+srv://alex:alex@omnistack-sdil6.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3001);
