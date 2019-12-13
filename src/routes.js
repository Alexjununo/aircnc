const express = require('express'),
    multer = require('multer'),
    uploadConfig = require('./config/upload'),
    SessionController = require('./controllers/SessionController'),
    SpotController = require('./controllers/SpotController'),
    ProfileController = require('./controllers/ProfileController'),
    BookingController = require('./controllers/BookingController'),
    routes = express.Router(),
    upload = multer(uploadConfig);

// index: Listar todos registros;
// show: Exibir um registro;
// store: Criar novo registro;
// update: Alterar um registro;
// destroy: Remover um registro;

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', ProfileController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);
module.exports = routes;
