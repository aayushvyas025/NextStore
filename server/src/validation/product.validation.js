export function validateProduct({title, price, image}) {
 if(typeof title !== "string" || !title.trim()) {
    return {success:false, field:"title"};
 }; 

 if(typeof price !== "number" || Number.isNaN(price) || price <= 0) {  
    return {success:false, field:"price"};
 }

 if(typeof image !== "string" || !image.trim()) {
    return {success:false, field:"image"};
 }

 return {success:true} ;
}
