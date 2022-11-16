import app from './app.js'
import { sequelize } from './database/database.js'

const port = process.env.PORT|| 3000;
//import './models/Person.js'
//import './models/Post.js'

async function main() {
    try {
        await sequelize.sync({force:false})
        app.listen(3000)

        console.log(`server is listening on port ${port}`)
    } catch {
        console.error("unable to connect to the database")
    }
}

main();
