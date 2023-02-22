const express = require("express"); //importar el modulo express
const app = express();              //inicializar el módulo
const path = require("path");       
app.use(express.static(path.resolve(__dirname,"./public")))
//app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})


const port = process.env.PORT || 3000;


app.listen(port,()=> console.log("servidor arriba en el puerto http://localhost:" + port));  //abrir el servidor web