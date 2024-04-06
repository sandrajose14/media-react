//axios configuration
import axios from "axios"


export const commonApi=async(httpmethod,url,reqBody)=>
{
    let requestConfig={
        method:httpmethod,
        url,
        data:reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(requestConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}
//finally exporting