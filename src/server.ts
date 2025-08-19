import express from 'express'
import plantRouter from "./routes/plant.router";
const app = express()

const PORT = process.env.PORT || 4200

app.use(express.json())

app.use('/plants', plantRouter);

app.get("/", (_req, res) => {
    res.json({ ok: true, message: "Server is running" });
});

app.listen(PORT, () => {
    console.log("listen", PORT)
})