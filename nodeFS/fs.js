const fs = require('fs/promises')
const path= require('path')

class itemCreator {
    constructor(path){
        // this.items=[]
        this.pathItems= path
    }
   async agregarItems(items){
     try {
           const item = await this.seeItems();
           const id= item.length === 0
           ? 1
           :item.products[item.products.length-1].id+1;
           const newItems = {id:id,...items}
            item.products.push(newItems) 
            await fs.writeFile(this.pathItems,JSON.stringify(item))
            return newItems
   } catch (error) {
        console.log(error)
   }
   }
   async seeItems(item){
    try {
        const items = await fs.readFile(this.pathItems)
       return JSON.parse(items)
    } catch (error) {
        console.log(error)
    }   
  }
  async  getAItem(id){
    try {
      const docRef = await fs.readFile(db, "products", idParams);
      const docResult = await fs.readFile(docRef);
      return { id: docResult.id, ...docResult.data() };
    } catch (error) {
      console.log(error)
    }

  }
}
module.exports = itemCreator
