import app from './app.js'
import { sequelize } from './database/database.js'

import './models/Person.js'
import './models/Post.js'

async function main() {
    try {
        await sequelize.sync()
        app.listen(3000)

        console.log(`server is listening on port ${3000}`)
    } catch {
        console.error("unable to connect to the database")
    }
}

main();
