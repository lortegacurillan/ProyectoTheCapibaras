const express = require('express');
const app = express();


//configuracion

app.set('port' , process.env.PORT || 8888); //define el puerto dado por el pc, si no tiene puerto lo define como 8888



//rutas

//static

//server

app.listen(app.get('port'), () => {console.log('Servidor iniciado' , app.get('port'));});
