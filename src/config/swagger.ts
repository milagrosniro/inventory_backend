import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'Inventory API',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/documentation/index.ts']

}

const swaggerSpec = swaggerJSDoc(options)

const swaggerOptions : SwaggerUiOptions = {
    customSiteTitle: 'Documentation Inventory API Express / Ts',
    customCss: `
    .swagger-ui .topbar{
    background-color: #2b3b45
    }`

}
export default swaggerSpec
export { swaggerOptions };

