const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const musicianRouter = require("./routes/musicians")
const port = 3000;

//TODO

// app.get("/musicians", async(request, response) =>{
//     try {
//         const musicians = await Musician.findAll(); // Retrieve all restaurants from the database
//         response.json(musicians); // Send the restaurants as a JSON response
//       } catch (error) {
//         console.error(error);
//         response.status(500).send('Internal Server Error');
//       }
// })

// app.get('/musicians/:id', async(req, res) => {
//   keyForRes = req.params.id
//   objFound = await Musician.findByPk(keyForRes)
//   res.json(objFound)

// })



// app.post('/musicians', async(req, res) => {
//   objToCreate = req.body
//   await Musician.create(objToCreate)
//   res.json(await Musician.findAll())
// })

// app.put('/musicians/:id', async(req, res) => {
//   objKeyToReplace = parseInt(req.params.id)
//   objFound = await Musician.findByPk(objKeyToReplace)

//   objFound.update({
//     name: req.body.name,
//     instrument: req.body.instrument
//   })

//   res.json(objFound)
// })

// app.delete('/musicians/:id', async(req, res) => {
//   objKeyToDelete = parseInt(req.params.id)
//   objFound = await Musician.findByPk(objKeyToDelete)
//   await objFound.destroy()
//   res.json(await Musician.findAll()) 
// })
app.use(express.json())
app.use(express.urlencoded())

app.use('/musicians', musicianRouter)

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port http://localhost:${port}/musicians`);
})