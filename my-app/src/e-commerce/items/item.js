import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc
  } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyASJUm4ddo3iKANkG01Edyg7_Izez7QM80",
  authDomain: "backend-144ee.firebaseapp.com",
  projectId: "backend-144ee",
  storageBucket: "backend-144ee.appspot.com",
  messagingSenderId: "249709741012",
  appId: "1:249709741012:web:4c1091090fc06a88cdcc41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


async function getitems(){
//   const collectionRef = collection(db, "items");

//   let results = await getDocs(collectionRef);
//   let dataItems = results.docs.map((doc) => {
//     return {
//       id: doc.id,
//      ...doc.data(),
//     };
//   });
    let dataItems=creadorDeItems.seeItems()
  return dataItems;
}
;
 async function getunitem(idParams){
    const docRef = doc(db, "items", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
   }

 }

 async function getCategory(CategoryParams){
  const collectionRef = collection(db, "items");

  const queryCat = query(
    collectionRef,
    where("category", "==", CategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataItems = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataItems;
}

class itemCreator {
    constructor(){
        this.items=[]
    }
    seeItems = () =>{
        return this.items
    }
    agregarItems(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ){
        const item = {
            title,description,price,thumbnail,code,stock:2
        }
        if(this.items.length===0){
            item.id = 1
        }else{
            item.id=this.items[this.items.length -1].id + 1;
        }
        this.items.push(item)
        
    }
}
function sendData(){
        let items = creadorDeItems.seeItems()
        let itemsCollectionRef = collection(db, "objetos")

        for(let item of items){
            delete(item.id)
            let newDoc = addDoc(itemsCollectionRef, item);
            console.log("Documento creado:",newDoc.id)
        }
}
    


const creadorDeItems= new itemCreator()
creadorDeItems.agregarItems("items1","info Item1",24,false)
creadorDeItems.agregarItems("items2","info Item2",24,false)
creadorDeItems.agregarItems("items3","info Item3",24,false)
sendData()
creadorDeItems.seeItems()


export {getitems,
    getunitem, 
    getCategory,
    app} 