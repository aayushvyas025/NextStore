import "dotenv/config"; 

const envVariables = Object.freeze({
    backendPort:process.env.BACKEND_PORT,
    mongodbUri:process.env.MONGODB_URI,
    nodeEnvironment:process.env.NODE_ENVIRONMENT,
    clientBaseURL:process.env.CLIENT_BASE_URL
})

export default envVariables; 