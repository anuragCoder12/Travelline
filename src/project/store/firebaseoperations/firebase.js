import { create } from 'zustand'
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs as showDocs, collection, getDoc as showDoc, doc } from 'firebase/firestore'
import {  ref, getDownloadURL as showURL, getStorage  } from 'firebase/storage'
export const useFirebase = create((set, get) => {
    const firebaseConfig = {
        apiKey: "AIzaSyChVQD-cU_3JjXH9jtX2BuRSnIEs5BNj7k",
        authDomain: "travel-site-28300.firebaseapp.com",
        projectId: "travel-site-28300",
        storageBucket: "travel-site-28300.appspot.com",
        messagingSenderId: "954485518697",
        appId: "1:954485518697:web:84ef02e5f367b010e70df8",
        databaseURL: "https://travel-site-28300-default-rtdb.firebaseio.com/"
    };
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

return{
    id:"",

    setId: (id) => set({id}),
    // to get image url
    getImageURL: (path) => {
        return showURL(ref(storage,path))
    },
    // getting all the details 
    getItems: async () => {
       const snapshot =  await showDocs(collection(firestore,"places"))
       return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
       
    },
    //getting explore page by id
    getExplore: async (id) => {
        const docRef = doc(firestore, `places`,id);
        const docSnap = await showDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const imageUrl = await get().getImageURL(data.image);
            return { ...data, imageUrl };
        } else {
            console.log("No such document!");
            return null;
        }
    },
    // getting sub datas
    getExplorePlaces: async () => {
        const snapshot =  await showDocs(collection(firestore,`places/${get().id}/explore`))
       return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    }
}
})