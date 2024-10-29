import colors from 'colors'
import { exit } from 'node:process'
import db from '../config/db'


const clearDB = async () => {
try{
    await db.sync({force:true})
    console.log(colors.yellow.bold('Data deleted correctly'))
    exit(0)

}catch(err){
    console.log(colors.red.bold(`${err}`))
    exit(1)
}

}

if(process.argv[2] === '--clear'){
    clearDB()
}

// console.log('PROCESS', process.argv)