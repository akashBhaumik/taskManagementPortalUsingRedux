import { ADD_TASK, DELETE_TASK } from "../config/actionTypes";
import Task from "../models/Task"
const initialState = []
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const {data} = action
            console.log("reducer = ", data)
            return [
                ...state ,
                data
            ]
        case DELETE_TASK:
            const {id} = action
            return state.filter(task => task.id !== id)
        default:
            return state

    }
}