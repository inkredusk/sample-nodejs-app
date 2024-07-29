const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World test 3 new from Argo CD!'))
app.listen(3000, () => console.log('Server ready'))