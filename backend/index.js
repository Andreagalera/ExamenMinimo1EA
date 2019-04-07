const express = require('express');
const morgan = require('morgan');
const app = express();
//const cors = require('cors');
const { mongoose } = require('./database');

//Configuración servidor
//Puerto
app.set('port', process.env.PORT || 3000);

//Middlewares: procesar datos
app.use(morgan('dev'));
    //servidor entienda formato json
app.use(express.json());
//app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/api' ,require('./routes/routes'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});