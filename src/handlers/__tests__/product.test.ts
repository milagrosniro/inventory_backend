import request from 'supertest'
import server from '../../server'

describe('POST /api/products', ()=>{

    it('should display validation errors', async ()=>{
        const response = await request(server).post('/api/products').send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)

        expect(response.status).not.toBe(200)
        expect(response.body.errors).not.toHaveLength(2)

    })
    it('should validate that the price is greater than 0', async ()=>{
        const response = await request(server).post('/api/products').send({
            name: 'Monitor Curvo',
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)

        expect(response.status).not.toBe(200)
        expect(response.body.errors).not.toHaveLength(4)

    })

    it('should validate that the price is a number', async ()=>{
        const response = await request(server).post('/api/products').send({
            name: 'Monitor Curvo',
            price: "zero"
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)

        expect(response.status).not.toBe(200)
        expect(response.body.errors).not.toHaveLength(4)

    })

    it('should create a new Product', async ()=>{
        const response = await request(server).post('/api/products').send({
            name: "MOUSE TESTING",
            price: 60,
            id: 1
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errors')

    })
})


describe('GET /api/products', ()=>{

    it('should check if api/products url exists', async ()=>{
        const response = (await request(server).get('/api/products'))

        expect(response.status).not.toBe(404)
    })



    it('GET a JSON response with products', async ()=>{
        const response = (await request(server).get('/api/products'))

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')

        expect(response.body).not.toHaveProperty('errors')

        
    })
})

describe('GET /api/products/:id', ()=>{

    it('Should return a 404 response for a non-existent product', async ()=>{
        const productID = -1
        const response = (await request(server).get(`/api/products/${productID}`))

        expect(response.status).toBe(404)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('error')
        expect(response.body.error).toBe('Product not founded')
        
    })

    it('ID param should be a number', async ()=>{
        const productID = "hola"
        const response = (await request(server).get(`/api/products/${productID}`))

        expect(response.status).toBe(400)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('not valid ID')


        expect(response.body.errors).not.toHaveLength(10)
        expect(response.status).not.toBe(401)

    })

    it('GET a JSON response for a single product', async ()=>{
        const productID = 1
        const response = (await request(server).get(`/api/products/${productID}`))

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')
    })
})

describe('PUT /api/products/:id', ()=>{
    it('ID param should be a number', async ()=>{
        const productID = "hi"
        const response = await request(server)
        .put(`/api/products/${productID}`)
        .send({
            name: 'Monitor Curvo',
            availability: true,
            price: 300
        })

        expect(response.status).toBe(400)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)
        expect(response.body.errors[0].msg).toBe('not valid ID')


        expect(response.body.errors).not.toHaveLength(10)
        expect(response.status).not.toBe(401)

    })

    it('should display validation error msg when updating a product', async()=>{
        const res = await request(server).put('/api/products/1').send({})

        expect(res.body).toHaveProperty('errors')
        expect(res.status).toBe(400)
        expect(res.body.errors).toBeTruthy()
        expect(res.body.errors).toHaveLength(6)

        expect(res.status).not.toBe(200)

    })

    it('product price should be greater than 0', async()=>{
        const res = await request(server).put('/api/products/1').send({
            name: 'Monitor Curvo',
            availability: true,
            price: 0
        })

        expect(res.body).toHaveProperty('errors')
        expect(res.status).toBe(400)
        expect(res.body.errors).toHaveLength(1)
        expect(res.body.errors[0].msg).toBe('Product price must be greather than 0')


        expect(res.status).not.toBe(200)

    })

    it('should return a 404 response for a none-existent product', async()=>{
        const res = await request(server).put('/api/products/10000').send({
            name: 'Monitor Curvo',
            availability: true,
            price: 300
        })

        expect(res).toHaveProperty('error')
        expect(res.status).toBe(404)


        expect(res.status).not.toBe(200)

    })

    it('should update an existing product with valid data', async()=>{
        const res = await request(server).put('/api/products/1').send({
            name: 'Monitor Curvo',
            availability: true,
            price: 350
        })

        expect(res.body).toHaveProperty('data')
        expect(res.status).toBe(200)


        expect(res.status).not.toBe(400)

    })


})

describe('PATCH /api/products/:id', ()=>{
    it('ID param should be a number', async ()=>{
        const productID = "hi"
        const response = await request(server)
        .patch(`/api/products/${productID}`)
        .send({
            name: 'Monitor Curvo',
            availability: true,
            price: 300
        })

        expect(response.status).toBe(400)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('errors')
        // expect(response.body.errors).toHaveLength(2)
        expect(response.body.errors[0].msg).toBe('not valid ID')


        expect(response.body.errors).not.toHaveLength(10)
        expect(response.status).not.toBe(401)

    })

    it('should return a 404 response for a none-existent product', async()=>{
        const res = await request(server).patch('/api/products/10000').send({
            name: 'Monitor Curvo',
            availability: true,
            price: 300
        })

        expect(res).toHaveProperty('error')
        expect(res.status).toBe(404)
        expect(res.body.error).toBe('Product not founded')

        expect(res.status).not.toBe(200)

    })

    it('should update the product availability', async()=>{
        const res = await request(server).patch('/api/products/1')

        expect(res.body).toHaveProperty('data')
        expect(res.status).toBe(200)
        expect(res.body.data.availability).toBe(false)

        expect(res.status).not.toBe(400)

    })


})

describe('DELETE /api/products/:id', ()=>{
    it('ID param should be a number', async ()=>{
        const productID = "hi"
        const response = await request(server)
        .delete(`/api/products/${productID}`)

        expect(response.status).toBe(400)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('not valid ID')


        expect(response.body.errors).not.toHaveLength(10)
        expect(response.status).not.toBe(401)

    })

    it('should return a 404 response for a none-existent product', async()=>{
        const res = await request(server).delete('/api/products/100000')

        expect(res).toHaveProperty('error')
        expect(res.status).toBe(404)


        expect(res.status).not.toBe(200)

    })

    it('should delete a product', async()=>{
        const res = await request(server).delete('/api/products/1')

        expect(res.body).toHaveProperty('data')
        expect(res.status).toBe(200)


        expect(res.status).not.toBe(404)

    })
})