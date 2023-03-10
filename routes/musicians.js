const express = require('express')
const router  = express.Router()
const {check, validationResult} = require("express-validator")
const {Musician} = require("../Musician")


router.get("/", async(request, response) =>{
    try {
        const musicians = await Musician.findAll(); // Retrieve all restaurants from the database
        response.json(musicians); // Send the restaurants as a JSON response
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
})

router.get('/:id', async(req, res) => {
  keyForRes = req.params.id
  objFound = await Musician.findByPk(keyForRes)
  res.json(objFound)

})



router.post('/',[check(["name", "instrument"]).not().isEmpty().trim()], async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    } 
    else{
        objToCreate = req.body
        await Musician.create(objToCreate)
        res.json(await Musician.findAll())
    }
})

router.put('/:id', async(req, res) => {
  objKeyToReplace = parseInt(req.params.id)
  objFound = await Musician.findByPk(objKeyToReplace)

  objFound.update({
    name: req.body.name,
    instrument: req.body.instrument
  })

  res.json(objFound)
})

router.delete('/:id', async(req, res) => {
  objKeyToDelete = parseInt(req.params.id)
  objFound = await Musician.findByPk(objKeyToDelete)
  await objFound.destroy()
  res.json(await Musician.findAll()) 
})


module.exports = router