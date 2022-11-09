import app from './app.js'
import { sequelize } from './database/database.js'
async function main() {
    await sequelize.authenticate()
    app.listen(3000)

    console.log(`server is listening on port ${3000}`)
}

main();
