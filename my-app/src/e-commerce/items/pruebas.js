
// class itemCreator {
//     constructor(){
//         this.items=[]
//     }
//     seeItems = () =>{
//      let items = {...this.items}
//         return items
         
//     }
//     agregarItems(
//         title,
//         category,
//         description,
//         price,
//         thumbnail,
//         code,
//         stock
//     ){
//         const item = {
//             title,category,description,price,thumbnail,code,stock:2
//         }
//         if(this.items.length===0){
//             item.id = 1
//         }else{
//             item.id=this.items[this.items.length -1].id + 1;
//         }
//         this.items.push(item)
//     }
//     modificarItems(idParams){
//       const docRef = doc(db, "items", idParams);
//       const docResult = getDoc(docRef);
//       if (docResult.exists()) {
//       return { id: docResult.id, ...docResult.data() };
//      }
//     }
// }
// function sendData(){
//          let items = {...creadorDeItems.seeItems()}
//          let itemsCollectionRef = collection(db, 'object')
//         console.log(items)

//         for(let item of items){
//             delete(item.id)
//             let newDoc = addDoc(itemsCollectionRef, item);
//             console.log('archivo creado',newDoc.id)
//         }
// }
// const creadorDeItems= new itemCreator()
// creadorDeItems.agregarItems("items1","a","info Item1",24,false)
// creadorDeItems.agregarItems("items2","a","info Item2",24,false)
// creadorDeItems.agregarItems("items3","b","info Item3",24,false)
// console.log(creadorDeItems.seeItems())   
