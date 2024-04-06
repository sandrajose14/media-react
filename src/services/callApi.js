import Category from '../components/Category'
import {commonApi} from './commonApi'
import {serverURL} from './urlServer'
//api for uploading video
export const uploadVideoapi = async(reqBody)=>{
 return  await commonApi('POST',`${serverURL}/video`,reqBody)
}
export const getUploadedVideoApi =  async()=>{
    return await commonApi('GET',`${serverURL}/video`,"")
}
///api to get uploaded video

export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverURL}/video/${id}`, {}); // Corrected URL string
};

//api to add video in to history
export const AddToHistory = async(reqBody)=>{
  return await commonApi('POST',`${serverURL}/history`,reqBody)
}
//api to get video from the history

export const getAllvideHistory=async()=>{
   return await commonApi('GET',`${serverURL}/history`,"")
}

//api to delete 
export const deleteWatchHistory = async(id)=>{
return  await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category
export const addCategoryApi = async(reqBody)=>{
 return await commonApi('POST',`${serverURL}/category`,reqBody)
}

export const getCategoryApi =  async()=>{
  return await commonApi('GET',`${serverURL}/category`,"")
}
//api to delete category
export const deleteCategoryApi = async(id)=>{
  return await commonApi('DELETE',`${serverURL}/category/${id}`,{})
}
//api to get a single vedio from videos
export const getAVideoApi=async(id)=>{
  return await commonApi('GET',`${serverURL}/video/${id}`,"")
}
//api to update category
export const updateCategory = async(id,reqBody)=>{
  return await commonApi('PUT',`${serverURL}/category/${id}`,reqBody)
}