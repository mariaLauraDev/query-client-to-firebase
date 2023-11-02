const express = require('express')
const firebaseConfig = require('./firebaseConfig')
const { initializeApp } = require('firebase/app')
const { getFirestore, collection, query, orderBy, limit, getDocs, where } = require('firebase/firestore')
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')
require('dotenv').config()

const app = express()
const port = 3000
const firebaseApp = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(firebaseApp)
const column = collection(firestoreDb, process.env.PRODUCTION_COLLECTION_NAME)

app.get('/download-json', async (req, res) => {
  try {
    const auth = getAuth(firebaseApp)
    await signInWithEmailAndPassword(auth, process.env.EMAIL, process.env.PASSWORD)

    const dateToDownload = req.query.date
    let q = query(
      column,
      where('data', '==', dateToDownload),
      //remove the limit to download all data
      limit(1000),
    )

    const querySnapshot = await getDocs(q)
    const docs = []
    querySnapshot.forEach((doc) => {
      docs.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    console.log(dateToDownload, docs.length)

    const jsonData = JSON.stringify(docs, null, 2)
    res.json(docs)

  } catch (error) {
    console.log('Erro ao buscar dados JSON:', error)
    res.status(500).send('Erro ao buscar dados JSON.')
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
