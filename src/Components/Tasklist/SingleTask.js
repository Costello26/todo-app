import { useEffect } from 'react';
import styled from 'styled-components';
import { SingleTaskClick } from '../Functions/SingleTaskClick';

export const SingleTask = ({singleTask, num, setTask, task, setEdit}) => {
    const singleTaskClass = [ singleTask.checked ? 'checked':'', singleTask.important ? 'important-text':'' ];

    useEffect( () => {
        let raw = localStorage.getItem('task') || [];
        setTask(JSON.parse(raw));
    }, [setTask])

    useEffect( () => {
        localStorage.setItem('task', JSON.stringify(task));
    }, [task])

    return(
        <Task className={singleTaskClass} onClick={(e) => SingleTaskClick(e, setTask, task, singleTask, num, setEdit)}> 
            {num+1}. 
            <div className='text'>
                {singleTask.text} 
            </div>
            <div className="controls">
                <span className="edit" title="Edit">
                    <i className="fas fa-pencil-alt"></i>
                </span>
                <span className="important" title="Important">
                    <i className="important fas fa-exclamation"></i>
                </span>
                <span className="delete" title="Delete task">
                    <i className="delete fas fa-trash"></i>
                </span>
            </div>
        </Task>
    )
}

const Task = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    text-align: start;
    margin: 10px 0;
    margin-right: 5px;
    padding: 10px 10px;
    border-radius: 3px;
    background-color: #eee;
    cursor: pointer;
    transition: .3s;
    color: #666;
    &:hover{
        span.edit{
            opacity: 1;
        }
    }
    &.checked{
        .text {text-decoration: line-through;}
    }
    .text{
        width: 75%;
    }
    &.important-text{
        .text{font-weight: bold;}
    }
    .controls{
        text-align: center;
        width: 21%;
        display: flex;
        justify-content: space-between;
        span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px !important;
            height: 30px !important;
            border: 1px solid #999;
            border-radius: 4px;
            i{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #999;
            }
        }
        .edit{
            opacity: 0;
            transition: .3s;
        }
    }
`;