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
  apiKey: "AIzaSyD4dU4d6CKlVV5orDpR9YVKLYr5TquSn9g",
  authDomain: "backend-e-commerce-e7020.firebaseapp.com",
  projectId: "backend-e-commerce-e7020",
  storageBucket: "backend-e-commerce-e7020.appspot.com",
  messagingSenderId: "1099105087760",
  appId: "1:1099105087760:web:377ab1ce5fa8fdae237595",
  measurementId: "G-CPBDT9H44R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


async function getitems(){
  const collectionRef = collection(db, "items")

  let results = await getDocs(collectionRef);
  let dataItems = results.docs.map((doc) => {
    return {
      id: doc.id,
     ...doc.data(),
    };
  });

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
async function modificar(idParams){
  const docRef = doc(db, "items", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    
  // return { id: docResult.id, ...docResult.data() };
 }

}

async function sendData(){
  const items = [
          {
              "id": 1,
              "name": "Drupa",
              "details": "Blend de granos provenientes de Colombia y Brasil con un tostado intermedio, con notas de chocolate y vainilla",
              "precio": 300,
              "category": "cafe",
              "stock":3,
              "min":1
            },
            {
              "id": 2,
              "name": "Fuego",
              "details": "Grano porveninente de Etipia con un tostado claro, con fuertes notas de nuez",
              "precio": 300,
              "category": "cafe",
              "stock":5,
              "min":1
            },
            {
              "id": 10,
              "name": "Focaccia",
              "details": "Pan de pizza relleno con queso, tomate y albahaca",
              "precio": 300,
              "category": "salty",
              "stock":7,
              "min":1
            },
            {
              "id": 11,
              "name": "Bagel",
              "details": "Bagel de trigo o centeno, relleno con humus de garbanzos, rucula y queso rallado",
              "precio": 300,
              "category": "salty",
              "stock":1,
              "min":1
            },
            {
              "id": 20,
              "name": "Matilda",
              "details": "Torta puramente de chocolate, con ganache de chocolate",
              "precio": 300,
              "category": "sweet",
              "stock":2,
              "min":1
            },
            {
              "id": 21,
              "name": "Selva Negra",
              "details": "Torta de chocolate con crema y frutas",
              "precio": 300,
              "category": "sweet",
              "stock":3,
              "min":1
            }
  ];
 let itemsCollectionRef = collection(db, "items")  
 for(let item of items){
   delete(item.id)
   let newDoc = await addDoc(itemsCollectionRef, item);
   console.log("Documento creado:",newDoc.id)
 }

};

export {getitems,
    getunitem, 
    getCategory,
    app} 