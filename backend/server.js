require('dotenv').config()
const application = require('./src/app')



application.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})