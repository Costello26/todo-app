import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TaskAdd } from '../Functions/Addtask';
import { EditTask } from '../Functions/EditTask';

export const AddTask = ({setTask, task, setEdit, edit}) => {
    useEffect( () => {
        let raw = localStorage.getItem('task') || [];
        setTask(JSON.parse(raw));
    }, [setTask])

    useEffect( () => {
        localStorage.setItem('task', JSON.stringify(task));
    }, [task])

    if(edit.text){
        document.getElementById("mainForm").value = edit.text;
    }

    return(
    <AddTaskWrap>
        <h1>To Do app</h1>
        <h3>Type here your tasks for adding to list</h3>
        <form className="inpGroup" onSubmit={(e) => {
            e.preventDefault()
            !edit.text ? TaskAdd(setTask, task) : EditTask(setTask, task, setEdit, edit)
            }}>
            <input id="mainForm" className="taskInp" type="text" placeholder="Task name here..."></input> 
            <input className="taskAdd" type="submit" value={edit? "Edit":"Add"}></input>
        </form>
        
        
    </AddTaskWrap>
    )
}

const AddTaskWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    text-align: center;
    display: block;
    justify-content: center;
    flex-direction: column;
    h1{
        padding-bottom: 10px;
    }
    h3{
        color: #666;
    }
    .inpGroup{
        margin: 20px auto;
        padding: 5px;
        display: flex;
        max-width: 500px;
    }
    input{
        padding: 5px;
        outline: none;
        &.taskAdd{ 
            cursor: pointer;
        }
    }
    .taskInp{
        width: 80%;
        transition: .3s;
        border: 1px solid #888;
        border-radius: 3px;
        &.success{
            border-color: green;
            color: green;
            &::placeholder{
                color: green;
            }
        }
        &.error{
            border-color: red;
            color: red;
            &::placeholder{
                color: red;
            }
        }
    }
    .taskAdd{
        width: 20%;
        margin-left: 5px;
    }
`;