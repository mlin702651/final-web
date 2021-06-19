import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";
import postsJson from "../json/posts.json"
import knowledgeJson from "../json/knowledge.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
// REFERENCE PRODUCTS
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");

// KNOWLEDGE 
const allKnowledgeCollectionRef = firebase.firestore().collection("allKnowledge");
//POSTS
const allPostsCollectionRef = firebase.firestore().collection("allPosts");
// USERBOOKMARKERS
const allUserBookMarkers = firebase.firestore().collection("allUsers");
//REFERENCE AUTH
const auth = firebase.auth();

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      user,
      id
    });
  })
}
//use
export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}
//use
export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}

export const createOrderApi = async (order) => {
  const user = auth.currentUser.uid;
  const orderRef = await allOrdersCollectionRef.doc();
  const id = orderRef.id;
  // Store Data for Aggregation Queries
  await orderRef.set({
    ...order,
    id,
    user
  });
  return { ...order, id };
}

export const getOrderById = async (orderId) => {
  const doc = await allOrdersCollectionRef.doc(orderId).get();
  return doc.data()
}

export const getOrderByUser = async () => {
  const user = auth.currentUser.uid;
  let jsonOrders = [];

  // QUERY Orders
  const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
  querySnapshot.forEach((doc) => {
    jsonOrders.push(doc.data());
  });
  return jsonOrders;
}
//use
export const signOut = () => {
  auth.signOut();
}
//use
export const checkLoginApi = () => {
  const user = auth.currentUser;
  if(!user) return false;
  return user.uid?  true : false;
}

//ramen


export const feedknowledge = () => {
  knowledgeJson.forEach((item) => {
    const docRef = allKnowledgeCollectionRef.doc();
    const id = docRef.id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...item,
      id,
    });
  })
}

export const feedPosts = () => {
  console.log("feeding")
  
  postsJson.allPosts.forEach((item) => {
    const docRef = allPostsCollectionRef.doc();
    const id = docRef.id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...item,
      id,
    });
  })
}

export const getAllPosts = async () => {
  // REFERENCE PRODUCTS COLLECTION
  let aaa=[]

  const doca = await allPostsCollectionRef.get();
  
  doca.forEach((doc) => {
    
    aaa.push(doc.data());
  });

   return aaa
}

//knowledge
export const getKnowledgeContent = async (url) => {
  const collection = knowledgeJson.find(element => element.url === url);
  const collectionSect = collection.sect;
  let jsonProducts=[]
  // QUERY PRODUCTS
  let querySnapshot;
  querySnapshot = await allKnowledgeCollectionRef.where("sect", "==", collectionSect).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts[0];
}

//userBookMarker
export const createUserBookMarkers = () => {
  const user = auth.currentUser.uid;
  const docRef = allUserBookMarkers.doc(user);
  const emptyBookMarker = []
  // Store Data for Aggregation Queries
  docRef.set({
    bookMarkers: emptyBookMarker,
  });
  return emptyBookMarker
}

