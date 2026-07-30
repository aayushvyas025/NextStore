
export const fetchProduct = async(request, response, next) => {
    try {
        
    } catch (error) {
        console.error(`Error, while fetching product ${error.message}`);
        next(error);
    }
} 

export const fetchProductById = async(request,response, next) => {
    try {
        
    } catch (error) {
        console.log(`Error, while fetching product by id ${error.message}`);
        next(error);
    }
} 

export const createProduct = async(request, response, next) => {
    try {
        
    } catch (error) {
        console.error(`Error, while creating product ${error.message}`);
        next(error);
    }
}

export const deleteProduct = async(request, response, next) => {
try {
    
} catch (error) {
    console.error(`Error, while creating product ${error.message}`);
    next(error); 
}
}

