const path= require('path')
const ItemCreator = require('./fs')

const creador = async() => {
    try {
        const pathBase=path.join(`${__dirname}/db.json`)
        const manager= new ItemCreator(pathBase)
        let item= await manager.seeItems();
        const addItem= {
                "name": "Drupa",
                "details": "Blend de granos provenientes de Colombia y Brasil con un tostado intermedio, con notas de chocolate y vainilla",
                "precio": 300,
                "category": "cafe",
                "stock":3,
                "min":1
           };
        const newItem= await manager.agregarItems(addItem)
        item= await manager.seeItems()
        console.log(item)
    } catch (error) {
        console.log(error)
    }
}

const aItem = async ()=>{
    try {
        const pathBase=path.join(`${__dirname}/db.json`)
        const manager = new ItemCreator(pathBase)
        let items = await manager.getAItem(1)
        console.log(items)
    } catch (error) {
        console.log(error)
    }
}
aItem()
module.exports = creador
