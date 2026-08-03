export const productValidation = ({ title, price, image }) => {
    if(typeof title !== "string" || !title.trim()) {
        return {isValid:false, field:'title'}; 
    }

    if(typeof price !== "number" || Number.isNaN(price) || price < 0 ) {
        return {isValid:false,field:'price' }; 
    }

    if(typeof image !== "string" || image.trim()) {
        return {isValid:false, field:'image'}; 
    }

    return {isValid:true}
};
