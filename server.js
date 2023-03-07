const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
/* PART 1
app.get("/musicians", async (request, response) => {
    const musicians = await Musician.findAll();
    response.json(musicians);
})
*/

/*PART 2*/
app.get("/musicians/:id", async (request, response) => {
    const music = request.params.id ;
    response.json(await Musician.findByPk(music));
  });

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})