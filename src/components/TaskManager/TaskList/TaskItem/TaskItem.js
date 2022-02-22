import React from 'react'
import { ListGroupItem, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteTaskAction } from '../../../../actions/taskActions';

const TaskItem = props => {
    const { task } = props

    const dispatch = useDispatch()
    const handleDelete = () => {
        // props.deleteTask(task.id)
        console.log("dispatch clicked ", dispatch)
        console.log("button clicked")
        dispatch(deleteTaskAction(task.id))
    }

    return (
        <ListGroupItem>
            {task.title}
            - 
            {task.descriptions}
            <Button close onClick={handleDelete} />
        </ListGroupItem>
    )
}


export default TaskItem