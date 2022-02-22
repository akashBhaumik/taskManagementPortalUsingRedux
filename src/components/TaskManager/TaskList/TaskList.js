import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, Alert } from 'reactstrap';
import { useSelector } from 'react-redux';

import TaskItem from './TaskItem/TaskItem.js'

const TaskList = props => {
    // const { tasks } = props

    // if (tasks.length === 0) {
    //     return <Alert>No Tasks to show.</Alert>
    // }

    const tasks = useSelector(state => state)
    console.log("selector = " , tasks)

    return (
        <ListGroup>
            {tasks.task.map((task) => <TaskItem  task={task} />)}
            {/* <h1>hello <TaskItem  task={"raaj"} /></h1> */}
        </ListGroup>
    )
}

// const mapStateToProps = (state) => { //store.getState()
//     return {
//         tasks: state.tasks
//     }
// }

export default TaskList