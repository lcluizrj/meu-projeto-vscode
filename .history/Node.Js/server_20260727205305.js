import express from 'express'
import { PrismaClient } from "./generated/prisma/client.js";
const app = express()
app.use(express.json())

const prisma = new PrismaClient();

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
   try { 
   
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }

    })
    res.status(201).json(user)
   } catch(err){

    return res.status(400).json({error:err.message})

   }
})

app.put('/usuarios/:id', async (req, res) => {



    const user = await prisma.user.update({
        where: {
            id: req.params.id

        },

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }

    })
    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req,res)=> {
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })

    res.status(200).json({message:'Usuario deltado com Sucesso!!'})
})





app.listen(3000)