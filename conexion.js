const express = require("express");
const  {createPool} = require("mysql2/promise");
const cors = require("cors"); 


 const {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
  PORT
}= require("./config");




const pool =createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port:DB_PORT,
  database: DB_DATABASE,
});

const app = express();

app.use(cors())
app.use(express.json());




app.post("/", async (req, res) => {
  const { name, userName, email, password } = req.body;
  console.log(req.body);
  try {
    await pool.query(
      "INSERT INTO datoslogin (name, userName, email, password) VALUES (?, ?, ?, ?)",
      [name, userName, email, password]
    );
    res.send("Se mandaron los datos");
  } catch (error) {
    console.error("Error:", error);

    res.status(500).send("se mandaron los datos");
  }
});


app.listen(PORT, (err) => {
  if (err) {
    console.error("Error al iniciar el servidor:", err);
  } else {
    console.log("Servidor iniciado en el puerto 3000");
  }
});
