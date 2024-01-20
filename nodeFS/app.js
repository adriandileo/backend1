const express = require('express')
const path = require('path')
const itemCreator = require('./fs')
const fs = require('fs')
const app = express()

app.get('/products',async (req,res)=>
{
    const pathBase=path.join(`${__dirname}/db.json`)
    const manager= new itemCreator(pathBase)
    let item= await manager.seeItems();
    res.send(item)
}) 
app.get('/products/:id',async (req,res)=>
{
    
    const docRef = doc(db, "products", req.params.id);
    const docResult = await fs.readFile(docRef);
    if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
   }

    res.send(aItem)
}) 
app.listen(8080,()=>console.log("hola"))