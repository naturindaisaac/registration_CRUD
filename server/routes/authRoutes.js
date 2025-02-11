import express from 'express'
import { connectionToDatabase } from '../db/db.js'


import bcrypt from 'bcrypt'
const router=express.Router()
router.post('/register', async(req, res)=>{
    const{surname, othername, DOB,    email, password}=req.body;
    try{
        const db=await connectionToDatabase()
        const [rows]= await db.query('SELECT* FROM users WHERE email=?',[email])
        if (rows.length > 0)
        {
            return res.status(409).json({message: 'user already exists'})
        }
        const hashPassword= await bcrypt.hash(password,10)
        await db.query("INSERT INTO users (surname, othername, DOB, email, Password) VALUES (?,?,?,?,?)", [surname, othername, DOB, email, hashPassword])
            res.status(201).json({message:"user added"})
    }
    catch(err){
        res.status(500).json(err)
    }
}




)
export default router;