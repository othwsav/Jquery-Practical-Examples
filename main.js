const othExpress = require('express')

const othApp = othExpress()

othApp.use(othExpress.static('static'))

const PORT = process.env.PORT || 8000

othApp.get('/', (req, res) => {
    res.sendFile("./index.html", {root : __dirname})
})

othApp.listen(PORT, () => console.log(`listening to port number ${PORT}`))