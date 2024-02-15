const router = require("express").Router()
const User = require("../models/User")

router.post("/", async (req, res) => {

   const {name, password} = req.body;

   if(!name){
      res.status(422).json({ error: "O nome é obrigatório"})
      return
   }

   if(!password){
      res.status(422).json({ error: "A senha é obrigatória"})
      return
   }

   const user = {
      name,
      password
   }

   try{
      const newUser = await User.create(user);

      res.status(201).json(newUser);

   } catch (error) {
      res.status(500).json({ message: error.message });
   }

})


router.get("/", async (req, res) => {

   try {
      const people = await User.find()

      res.status(200).json(people)
   } catch (err){
      res.status(500).json({error: err})
   }
})

router.get("/:id", async (req, res) => {

   const id = req.params.id;


   try {

      const person = await User.findOne({ _id: id})

      if(!person) {
         res.status(422).json({ error: "O usuario nao foi encontrado!"})
         return
      }

      res.status(200).json(person)
   } catch(err) {
      res.status(500).json({error: err})
   }
})


router.patch("/:id", async (req, res) => {

   const id = req.params.id;

   const { name, password } = req.body;

   const user = {
      name,
      password
   }

   try {

      const updatedUser = await User.updateOne({ _id: id }, user)

      if(updatedUser.matchedCount === 0){
         res.status(422).json({ error: "O usuario nao foi encontrado!"})
         return
      }

      res.status(200).json(user)
   } catch (err) {
      res.status(500).json({error: err})
   }
})


router.delete("/:id", async (req, res) => {
   const id = req.params.id;

   const user = await User.findOne({ _id: id })

   if(!user) {
      res.status(422).json({ error: "O usuario nao foi encontrado!"})
      return
   }

   try {

      await User.deleteOne({ _id: id })

      res.status(200).json({ message: "Usuario removido com sucesso!"})
   } catch (err) {
      res.status(500).json({ error: err })
   }

})


module.exports = router