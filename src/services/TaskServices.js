import { taskURL } from "../config/api"
import axios from "axios"


export const getTasks = () =>{
  return  axios.get(taskURL).then(res => res.data)
}

export const addTasks = (data) =>{
    return axios.post(taskURL ,data).then(res => res.data)
}

export const deleteTasks = (id) =>{
    return axios.delete(taskURL + "/" + id).then(res => res.data)
}