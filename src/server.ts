import express from 'express'
const app = express()

const PORT = process.env.PORT || 4200

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ok: true, message: "Hello world"})
})

app.listen(PORT, () => {
    console.log("listen", PORT)
})