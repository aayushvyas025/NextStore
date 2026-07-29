import apiRoutes from "#constants/routes.constant"
import productRoutes from "#routes/product/product.route"

const {baseUrl} = apiRoutes; 

function setupRouteMiddleware(app) {
    app.use(baseUrl, productRoutes); 
}

export default setupRouteMiddleware;  

