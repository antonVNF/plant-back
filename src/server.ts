import express from 'express'
const app = express()

const PORT = process.env.PORT || 4200

app.listen(PORT, () => {
    console.log("listen", PORT)
})