import "dotenv/config"; 

const envVariables = Object.freeze({
    backendPort:process.env.BACKEND_PORT,
    mongodbUri:process.env.MONGODB_URI
})

export default envVariables; 