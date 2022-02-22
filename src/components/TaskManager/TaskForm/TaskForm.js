import React from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../../actions/taskActions";
import { useForm } from "react-hook-form";

const TaskForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        dispatch(addTaskAction(data))
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Id :-</label>
            <input  {...register("id")} /><br></br>
            <label>Title:-</label>
            <input  {...register("title")} /><br></br>
            <label>Descriptions :-</label>
            <input  {...register("descriptions")} /><br></br>
            <input type="submit" />

        </form>
    )
}

export default TaskForm