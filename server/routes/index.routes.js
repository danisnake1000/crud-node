import { Router } from "express";
import  pool  from "../db.js";

const router = Router()

router.get('/ping', async(req,res)=>{

    const respuesta = await pool.query('SELECT 1+1 as result')
    console.log(respuesta)
    res.json("pingggggg")
})
export default router