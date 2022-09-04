import {getConnection} from "./../bd/databaseconfig";

const getProducts= async(request,response)=>{
    try{
        const connection = await getConnection();
        const result=await connection.query("SELECT * FROM product") ;
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message)
    }
    
};
const getCategories= async(request,response)=>{
    try{
        const connection = await getConnection();
        const result=await connection.query("SELECT * FROM category") ;
        console.log(result);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message)
    }
    
}
export const  methods ={
getProducts,
getCategories,

} ;