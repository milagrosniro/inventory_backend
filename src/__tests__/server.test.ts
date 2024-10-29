import db from "../config/db"
import { connectDB } from "../server"


// describe('GET /api', ()=>{
//     it('should send back a json response', async()=>{
//         const res = await request(server).get('/api')
//         expect(res.status).toBe(200)
//         expect(res.headers['content-type']).toMatch(/json/) // si en la rta hay json
//         expect(res.body.msg).toBe('Desde API')
        
//         //console.log(res.text) // obtener info de la rta 
//        // console.log(res.body) // obtener info de la rta 
//     })
// })

//probar el catch, error en una conexion
jest.mock('../config/db')

describe('connectDB', ()=>{
    it('should DB connection error', async ()=>{
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Error connection DB')) //forzando para que caiga en catch, en error
            const consoleSpy = jest.spyOn(console, 'log')

            await connectDB()
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Error connection DB')
            )

    })
})


