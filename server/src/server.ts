import app from "./app"

app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен на http://localhost:${process.env.PORT}`)
})
