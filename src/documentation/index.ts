/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: Product ID
 *          example: 1
 *        name:
 *            type: string
 *            description: Product name
 *            example: Monitor 32
 *        price:
 *            type: integer
 *            description: Product price
 *            example: 100
 *        availability:
 *            type: boolean
 *            description: Product availability
 *            example: true
 */

/**
 * @swagger
 * /api/products:
 *    get:
 *      summary: Get a list of products
 *      tags: 
 *        - Products
 *      description: Return a list of products
 *      responses: 
 *        200:
 *          description: succesful response
 *          content: 
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/products/{id} :
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return an product by ID
 *      parameters: 
 *          - in: path
 *            name: id
 *            description: Id of the product to retrieve
 *            required: true
 *            schema:
 *               type: integer
 *      responses:
 *          200:
 *              description: succesful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Not found.
 *          400:
 *              description: Bad Request - Invalid ID
 */

/**
 * @swagger
 * /api/products :
 *  post:
 *      summary: Create a new Product
 *      tags:
 *          - Products
 *      description: Create a new record in the DB
 *      requestBody: 
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor 32''"    
 *                          price:
 *                              type: integer
 *                              example: 200
 *      responses:
 *          201:
 *              description: Product created succesfully
 *          400:
 *              description: Bad Request - Invalid inpur data
 */

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updates a product with user input
 *      tags:
 *          - Products
 *      description: Upload a product in DB
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: string
 *                              example: "New Name Monitor"
 *                          price:
 *                              type: integer
 *                              example: 350
 *                          availability:
 *                              type: boolean
 *                              example: true
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Product ID to retrieve
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Product uploaded succesfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Updates product availability
 *      tags:
 *          - Products
 *      description: Returns the updated availability
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Product ID to retrieve
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Product availability uploaded succesfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Update a product with user input
 *      tags:
 *          - Products
 *      description: Upload a product in DB
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                              type: string
 *                              example: "New Name Monitor"
 *                          price:
 *                              type: integer
 *                              example: 350
 *                          availability:
 *                              type: boolean
 *                              example: true
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Product ID to upload
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Product uploaded succesfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Delete product by ID
 *      tags:
 *          - Products
 *      description: Returns product deleted
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Product ID to delete
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Product availability uploaded succesfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          value: 'Product deleted'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */